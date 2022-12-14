import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PopupComponent } from './components/popups/popup.component';
import { CanvasModule } from './shared/modules/canvas/canvas.module';
import { ModalModule } from './shared/modules/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CanvasModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
