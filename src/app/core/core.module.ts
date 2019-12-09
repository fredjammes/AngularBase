import {NgModule} from '@angular/core';
import {getServices} from './mock';
import {webService} from './web-services';
import {mockService} from './mock-services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpApiInterceptorService } from './http/http-api-interceptor.service';

@NgModule({
  providers: [
    ...getServices(webService, mockService),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
