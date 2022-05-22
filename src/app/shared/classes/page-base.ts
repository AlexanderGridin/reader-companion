import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { Subject, takeUntil } from 'rxjs';

interface PageBaseParams {
  router: Router;
  activatedRoute: ActivatedRoute;
  resolverResponseProperty?: string;
  pageTitleService: PageTitleService;
}

@Component({
  template: '',
})
export abstract class PageBase<PageModel> implements OnInit, OnDestroy {
  public pageModel!: PageModel;
  public destroy$: Subject<void> = new Subject<void>();

  private activatedRoute!: ActivatedRoute;
  private resolverResponseProperty!: string;
  private pageTitleService!: PageTitleService;
  private router!: Router;
  private _isLoading = false;

  constructor(
    @Inject('')
    {
      router,
      activatedRoute,
      resolverResponseProperty,
      pageTitleService,
    }: PageBaseParams
  ) {
    this.activatedRoute = activatedRoute;
    this.resolverResponseProperty = resolverResponseProperty || '';
    this.pageTitleService = pageTitleService;
    this.router = router;
  }

  public ngOnInit(): void {
    this.setTitle();
    this.setSubscriptions();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setSubscriptions(): void {
    this.setRouterEventsSubscription();
    this.setActivatedRouteDataSubscription();
  }

  private setRouterEventsSubscription(): void {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.startLoading();
          this.pageTitleService.setTitle('');
        }

        if (routerEvent instanceof NavigationEnd) {
          this.endLoading();
        }
      });
  }

  private setActivatedRouteDataSubscription(): void {
    if (
      !this.resolverResponseProperty ||
      !this.activatedRoute.snapshot.data[this.resolverResponseProperty]
    )
      return;

    this.activatedRoute.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.pageModel = data[this.resolverResponseProperty];
        this.setTitle();
      });
  }

  private setTitle(): void {
    this.pageTitleService.setTitle(this.generateTitle());
  }

  public startLoading(): void {
    this._isLoading = true;
  }

  public endLoading(): void {
    this._isLoading = false;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  protected abstract generateTitle(): string;
}
