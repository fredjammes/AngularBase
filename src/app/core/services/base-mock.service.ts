import {BaseService} from './base.service';
import {Observable, of} from 'rxjs';

export abstract class BaseMockService<TModel extends { id: string }> implements BaseService<TModel> {
  protected abstract modelList: TModel[];

  get(id: string): Observable<TModel> {
    return of(this.modelList.find(model => model.id === id));
  }
  getList(): Observable<TModel[]> {
    return of(this.modelList);
  }
  add(model: TModel): Observable<TModel> {
    this.modelList.push(model);
    model.id = String(Math.random());
    return of(model);
  }
  modify(model: TModel): Observable<TModel> {
    const indexOfModelToModify: number = this.modelList.indexOf(this.modelList.find(currentModel => currentModel.id === model.id));
    this.modelList[indexOfModelToModify] = model;
    return of(this.modelList[indexOfModelToModify]);
  }
  delete(id: string): Observable<void> {
    this.modelList.splice(this.modelList.indexOf(this.modelList.find(model => model.id === id)), 1);
    return of();
  }
}
