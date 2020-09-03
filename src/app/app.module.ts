import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';
import { GlowingCircleComponent } from './glowing-circle/glowing-circle.component';
import { HomeComponent } from './home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SocialIconsComponent,
    NeonButtonComponent,
    NeonTextComponent,
    GlowingCircleComponent,
    HomeComponent,
    WavyTextComponent,
    CircleComponent,
    ElasticLineComponent,
    BubblesComponent,
    TextDistorionComponent,
    GhostTextComponent,
    EmojiComponent,
    ProfilePageComponent,
    ShiningTextComponent,
    GlowingDotsComponent,
    DotsComponent,
    WoodenTextComponent,
    RingOfFireComponent,
    WavyCircleComponent,
    TextRotatorComponent,
    GlowingRingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
