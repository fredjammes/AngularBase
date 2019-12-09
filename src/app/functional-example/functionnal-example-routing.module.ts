import {RouterModule, Routes} from '@angular/router';
import {FunctionalExampleComponent} from './functional-example.component';
import {NgModule} from '@angular/core';
import { FunctionalExampleHomeComponent } from './functionnal-example-home/functional-example-home.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionalExampleComponent,
    children: [
      {
        path: '',
        component: FunctionalExampleHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionnalExampleRoutingModule {}
