import {Observable} from 'rxjs';

export abstract class BaseService<TModel extends {id: string}> {
  abstract get(id: string): Observable<TModel>;
  abstract getList(): Observable<TModel[]>;
  abstract add(model: TModel): Observable<TModel>;
  abstract modify(model: TModel): Observable<TModel>;
  abstract delete(id: string): Observable<void>;
}
