import {Provider} from '@angular/core';
import { ExampleService } from './example/exampleService';
import { ExampleWebService } from './example/example-web.service';

export const webService: Provider[] = [
  {
    provide: ExampleService, useClass: ExampleWebService
  }
];
