import {NgModule} from '@angular/core';
import {getServices} from './mock';
import {webService} from './web-services';
import {mockService} from './mock-services';

@NgModule({
  providers: getServices(webService, mockService)
})
export class CoreModule {}
