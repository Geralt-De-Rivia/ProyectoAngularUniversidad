import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { AutenticacionService } from './servicios/autenticacion.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

import {ReactiveFormsModule} from '@angular/forms';
import { GafasComponent } from './common/gafas/gafas.component';
import { RelojesComponent } from './common/relojes/relojes.component';
import { RopaComponent } from './common/ropa/ropa.component';
import { OutFitComponent } from './common/out-fit/out-fit.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'relojes', component:RelojesComponent},
  {path: 'ropa', component:RopaComponent},
  {path: 'out-fit', component:OutFitComponent},
  {path: 'gafas', component:GafasComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    GafasComponent,
    RelojesComponent,
    RopaComponent,
    OutFitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AutenticacionService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
