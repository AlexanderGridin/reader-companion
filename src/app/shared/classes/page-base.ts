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

@Component({
  template: '',
})
export abstract class PageBase<ViewModel> implements OnInit, OnDestroy {
  public viewModel!: ViewModel;
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
    }: {
      router: Router;
      activatedRoute: ActivatedRoute;
      resolverResponseProperty?: string;
      pageTitleService: PageTitleService;
    }
  ) {
    this.activatedRoute = activatedRoute;
    this.resolverResponseProperty = resolverResponseProperty || '';
    this.pageTitleService = pageTitleService;
    this.router = router;
  }

  public ngOnInit(): void {
    this.setPageTitle();
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
        this.viewModel = data[this.resolverResponseProperty];
        this.setPageTitle();
      });
  }

  private setPageTitle(): void {
    this.pageTitleService.setTitle(this.calculateTitle());
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

  protected abstract calculateTitle(): string;
}
