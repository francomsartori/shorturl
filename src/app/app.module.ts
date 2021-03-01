import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcortarUrlComponent } from './components/acortar-url/acortar-url.component';
import { ShortInterceptor } from './services/short.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SpinnerComponent,
    NavbarComponent,
    AcortarUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule   
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : ShortInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
