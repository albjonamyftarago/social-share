import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';
import { GlowingCircleComponent } from './glowing-circle/glowing-circle.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialIconsComponent,
    NeonButtonComponent,
    NeonTextComponent,
    GlowingCircleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
