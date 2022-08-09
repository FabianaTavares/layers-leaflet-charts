import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkerService } from './shared/services/marker.service';
import { MapComponent } from './modules/maps/map/map.component';
import { PopupService } from './shared/services/popup.service';
import { ShapeService } from './shared/services/shape.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopupService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
