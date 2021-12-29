import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppTesteExcluirComponent } from './app-teste-excluir/app-teste-excluir.component';
import { AppNhamenhame } from './app-nhamenhame.html/app-nhamenhame.html.component';
import { AppNhamedevelopComponent } from './app-nhamedevelop/app-nhamedevelop.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTesteExcluirComponent,
    AppNhamenhame.HtmlComponent,
    AppNhamedevelopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
