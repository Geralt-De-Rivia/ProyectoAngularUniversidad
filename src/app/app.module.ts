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
import { BlogComponent } from './common/blog/blog.component';
import { OutLetComponent } from './common/out-let/out-let.component';
import { GuardService } from './servicios/guard.service';
import { PrincipalComponent } from './principal/principal.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component:PrincipalComponent, canActivate:[GuardService]},
  {path: 'registro', component:RegistroComponent},
  {path: 'relojes', component:RelojesComponent, canActivate:[GuardService]},
  {path: 'blog', component:BlogComponent, canActivate:[GuardService]},
  {path: 'out-let', component:OutLetComponent, canActivate:[GuardService]},
  {path: 'gafas', component:GafasComponent, canActivate:[GuardService]},
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
    BlogComponent,
    OutLetComponent,
    PrincipalComponent
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
