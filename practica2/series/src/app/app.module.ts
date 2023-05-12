import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentMovieComponent } from './component-movie/component-movie.component';
import { SerietvPipe } from './serietv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentMovieComponent,
    SerietvPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
