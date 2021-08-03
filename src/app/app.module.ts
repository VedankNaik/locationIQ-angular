import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { ForwardgeocodeComponent } from './forwardgeocode/forwardgeocode.component';
import { ReversegeocodeComponent } from './reversegeocode/reversegeocode.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    ForwardgeocodeComponent,
    ReversegeocodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard, ConnectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
