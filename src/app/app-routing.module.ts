import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';
import { GlowingCircleComponent } from './glowing-circle/glowing-circle.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { WavyTextComponent } from './wavy-text/wavy-text.component';
import { CircleComponent } from './circle/circle.component';
import { ElasticLineComponent } from './elastic-line/elastic-line.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { TextDistorionComponent } from './text-distorion/text-distorion.component';
import { GhostTextComponent } from './ghost-text/ghost-text.component';
import { EmojiComponent } from './emoji/emoji.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShiningTextComponent } from './shining-text/shining-text.component';
import { GlowingDotsComponent } from './glowing-dots/glowing-dots.component';
import { DotsComponent } from './dots/dots.component';
import { WoodenTextComponent } from './wooden-text/wooden-text.component';
import { RingOfFireComponent } from './ring-of-fire/ring-of-fire.component';
import { WavyCircleComponent } from './wavy-circle/wavy-circle.component';
import { TextRotatorComponent } from './text-rotator/text-rotator.component';
import { GlowingRingComponent } from './glowing-ring/glowing-ring.component';
import { RotationAnimationEffectsComponent } from './rotation-animation-effects/rotation-animation-effects.component';
import { ColorfulShadowComponent } from './colorful-shadow/colorful-shadow.component';
import { FillTextComponent } from './fill-text/fill-text.component';
import { LiquidButtonComponent } from './liquid-button/liquid-button.component';
import { LightExplosionComponent } from './light-explosion/light-explosion.component';
import { JumpingDotComponent } from './jumping-dot/jumping-dot.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {
    path:'',
    component:ProfilePageComponent
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
      path:'text-distortion',
      component:TextDistorionComponent
    }, 
    {
      path:'ghost-text',
      component:GhostTextComponent
    },  
    {   
      path:'emoji',
      component:EmojiComponent       
    },   
    {   
      path:'works',
      component:ProjectsComponent
    },   
    {   
      path:'shining-text',
      component:ShiningTextComponent
    }, 
    {   
      path:'glowing-dots',
      component:GlowingDotsComponent
    },  
    {   
      path:'wooden-text',
      component:WoodenTextComponent
    },  
    {   
      path:'ring-of-fire',
      component:RingOfFireComponent
    }, 
    {   
      path:'dots',
      component:DotsComponent
    },  
    {   
      path:'wavy-circle',
      component:WavyCircleComponent
    }, 
    {   
      path:'text-rotator',
      component:TextRotatorComponent
    },
    {   
      path:'glowing-ring',
      component:GlowingRingComponent
    },
    {   
      path:'rotation-animation',
      component:RotationAnimationEffectsComponent
    },
    {   
      path:'colorful-shadow',
      component:ColorfulShadowComponent
    },
    {   
      path:'fill-text',
      component:FillTextComponent
    },
    {   
      path:'liquid-button',
      component:LiquidButtonComponent
    },
    {   
      path:'light-explosion',
      component:LightExplosionComponent
    },
    {   
      path:'jumping-dot',
      component:JumpingDotComponent
    },
    {   
      path:'loading-animation',
      component:LoadingAnimationComponent
    }, 
    {   
      path:'button',
      component:ButtonComponent
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
