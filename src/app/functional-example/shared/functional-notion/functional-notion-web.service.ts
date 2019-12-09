import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FunctionalNotion} from './functional-notion';
import { FunctionalNotionService } from './functional-notion.service';
import { BaseHttpService } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalNotionWebService extends BaseHttpService<FunctionalNotion> implements FunctionalNotionService {

  protected resourceEndpoint = 'functional-notions';

  getNotionsByName(name: string): Observable<FunctionalNotion[]> {
    throw new Error('Not Yet Implemented');
  }
}
