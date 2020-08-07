import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import { NeonTextComponent } from './neon-text/neon-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NeonButtonComponent,
    NeonTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
