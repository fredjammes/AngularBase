import { Injectable } from '@angular/core';
import {ExampleService} from './exampleService';
import {Example} from './example';
import {BaseMockService} from '../services/base-mock.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleMockService extends BaseMockService<Example> implements ExampleService {
  modelList: Example[] = [
    {
      id: '1',
      description: 'example description 1',
      name: 'Example 1'
    },
    {
      id: '2',
      description: 'example description 2',
      name: 'Example 2'
    },
    {
      id: '3',
      description: 'example description 3',
      name: 'Example 3'
    },
    {
      id: '4',
      description: 'example description 4',
      name: 'Example 4'
    }
  ];
}
