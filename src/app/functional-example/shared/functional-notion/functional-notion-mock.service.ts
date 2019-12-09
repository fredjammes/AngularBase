import {FunctionalNotionService} from './functional-notion.service';
import {Observable, of} from 'rxjs';
import {FunctionalNotion} from './functional-notion';
import { BaseMockService } from '../../../core/services/base-mock.service';

const functionalNotions: FunctionalNotion[] = [
  {
    id: '1',
    name: 'Notion 1'
  },
  {
    id: '2',
    name: 'Notion 2'
  },  {
    id: '3',
    name: 'Notion 3'
  },
];

export class FunctionalNotionMockService extends BaseMockService<FunctionalNotion> implements FunctionalNotionService {

  modelList: FunctionalNotion[] = functionalNotions;

  getNotionsByName(name: string): Observable<FunctionalNotion[]> {
    return of(functionalNotions.filter(notion => notion.name.includes(name)));
  }
}
