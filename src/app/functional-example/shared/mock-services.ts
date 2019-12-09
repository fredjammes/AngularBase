import {Provider} from '@angular/core';
import { FunctionalNotionService } from './functional-notion/functional-notion.service';
import { FunctionalNotionMockService } from './functional-notion/functional-notion-mock.service';

export const mockServices: Provider[] = [
  {
    provide: FunctionalNotionService, useClass: FunctionalNotionMockService
  }
];
