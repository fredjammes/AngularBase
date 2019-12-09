import {Observable} from 'rxjs';
import { FunctionalNotion } from './functional-notion';
import { BaseService } from '../../../core/services/base.service';

export abstract class FunctionalNotionService extends BaseService<FunctionalNotion> {
  abstract getNotionsByName(name: string): Observable<FunctionalNotion[]>;
}
