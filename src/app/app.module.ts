import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { provideHttpClient, withInterceptors} from "@angular/common/http";
import {jwtInterceptor} from "./core/interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
