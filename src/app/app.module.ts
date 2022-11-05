import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import { tcnewsapi } from './service/tcnewsapi.service';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [tcnewsapi],
  bootstrap: [AppComponent]
})
export class AppModule { }
