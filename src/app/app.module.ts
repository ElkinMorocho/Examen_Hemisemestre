import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { ListarClienteComponent } from './components/list-cliente/listar-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListarClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-66vgx0k021m5yhr7.us.auth0.com',
      clientId: 'uzrSxyMexKgbrotW6HuFlRQl8zdDpi5e',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
      //cacheLocation: 'localstorage',
      //useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
