import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { ModelerComponent } from './modeler/modeler.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    DocumentacionComponent,
    ModelerComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
