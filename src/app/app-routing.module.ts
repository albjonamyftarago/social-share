import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';
import { GlowingCircleComponent } from './glowing-circle/glowing-circle.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'social-icons',
    component:SocialIconsComponent
  },
  {
    path:'neon-button',
    component:NeonButtonComponent
  },
  {
    path:'neon-text',
    component:NeonTextComponent
  },
  {
    path:'glowing-circle',
    component:GlowingCircleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
