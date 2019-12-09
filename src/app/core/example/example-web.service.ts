import { Injectable } from '@angular/core';
import {ExampleService} from './exampleService';
import {Example} from './example';
import {BaseHttpService} from '../services/base-http.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleWebService extends BaseHttpService<Example> implements ExampleService {

  resourceEndpoint = 'examples';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }
}
