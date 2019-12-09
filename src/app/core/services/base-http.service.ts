import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

export abstract class BaseHttpService<TModel extends { id: string }> extends BaseService<TModel> {
  protected abstract resourceEndpoint: string;

  constructor(protected http: HttpClient) {
    super();
  }

  get(id: string): Observable<TModel> {
    return this.http.get<TModel>(`${this.resourceEndpoint}/${id}`);
  }
  getList(): Observable<TModel[]> {
    return this.http.get<TModel[]>(this.resourceEndpoint);
  }
  add(model: TModel): Observable<TModel> {
    return this.http.post<TModel>(this.resourceEndpoint, model);
  }
  modify(model: TModel): Observable<TModel> {
    return this.http.post<TModel>(this.resourceEndpoint, model);
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.resourceEndpoint}/${id}`);
  }
}
