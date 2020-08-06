import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';

const routes: Routes = [
  {
    path:'',
    component:TestComponent
  },
  {
    path:'neon-button',
    component:NeonButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
