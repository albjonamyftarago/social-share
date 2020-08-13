import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';
import { GlowingCircleComponent } from './glowing-circle/glowing-circle.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { HomeComponent } from './home/home.component';
import { WavyTextComponent } from './wavy-text/wavy-text.component';
import { CircleComponent } from './circle/circle.component';
import { ElasticLineComponent } from './elastic-line/elastic-line.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { TextDistorionComponent } from './text-distorion/text-distorion.component';

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
  },
  {
    path:'wavy-text',
    component:WavyTextComponent
    },
    {
      path:'circle',
      component:CircleComponent
    },
    {
      path:'elastic-line',
      component:ElasticLineComponent
    },
    {
      path:'bubbles',
      component:BubblesComponent
    },
    {
      path:'text-distorion',
      component:TextDistorionComponent
    },       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
