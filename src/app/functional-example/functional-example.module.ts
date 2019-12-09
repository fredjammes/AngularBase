import {NgModule} from '@angular/core';
import { FunctionalExampleComponent } from './functional-example.component';
import {FunctionnalExampleRoutingModule} from './functionnal-example-routing.module';
import {getServices} from '../core/mock';
import {webServices} from './shared/web-services';
import {mockServices} from './shared/mock-services';
import { FunctionalExampleHomeComponent } from './functionnal-example-home/functional-example-home.component';

@NgModule({
  declarations: [FunctionalExampleComponent, FunctionalExampleHomeComponent],
  imports: [
    FunctionnalExampleRoutingModule
  ],
  exports: [],
  providers: getServices(webServices, mockServices)
})
export class FunctionalExampleModule {

}
