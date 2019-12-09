import {Provider} from '@angular/core';
import { ExampleService } from './example/exampleService';
import { ExampleMockService } from './example/example-mock.service';

export const mockService: Provider[] = [
  {
    provide: ExampleService, useClass: ExampleMockService
  }
];
