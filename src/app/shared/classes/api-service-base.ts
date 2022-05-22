import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class ApiServiceBase<
  ReadResponse,
  CreateRequest,
  UpdateRequest = CreateRequest,
  CreateResponse = ReadResponse,
  UpdateResponse = ReadResponse
> {
  constructor(protected http: HttpClient) {}

  abstract getEntity(id: number | string | null): Observable<ReadResponse>;
  abstract createEntity(entity: CreateRequest): Observable<CreateResponse>;
  abstract updateEntity(
    id: number | string,
    entity: UpdateRequest
  ): Observable<UpdateResponse>;
}
