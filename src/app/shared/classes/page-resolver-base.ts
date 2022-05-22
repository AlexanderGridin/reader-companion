import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiServiceBase } from '@shared/classes/api-service-base';

@Injectable()
export abstract class PageResolverBase<PageModel>
  implements Resolve<PageModel | null>
{
  private routerParam!: string | null;
  private apiService!: ApiServiceBase<PageModel, PageModel>;

  constructor(
    @Inject('')
    {
      apiService,
      routerParam,
    }: {
      apiService: ApiServiceBase<PageModel, PageModel>;
      routerParam?: string;
    }
  ) {
    this.apiService = apiService;
    this.routerParam = routerParam || null;
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<PageModel | null> {
    if (!this.routerParam) {
      return this.apiService.getEntity(null);
    }

    const routerParamValue: string | null = route.paramMap.get(
      this.routerParam
    );

    if (!routerParamValue) return of(null);

    return this.apiService.getEntity(routerParamValue);
  }
}
