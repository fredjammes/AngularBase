import {Provider} from '@angular/core';
import { FunctionalNotionService } from './functional-notion/functional-notion.service';
import { FunctionalNotionWebService } from './functional-notion/functional-notion-web.service';

export const webServices: Provider[] = [
  {
    provide: FunctionalNotionService, useClass: FunctionalNotionWebService
  }
];
