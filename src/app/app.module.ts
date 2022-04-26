import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IaltaComponent } from './alg-types/ialta/ialta.component';
import { EvpatoriaComponent } from './alg-types/evpatoria/evpatoria.component';
import { SochiComponent } from './alg-types/sochi/sochi.component';
import { GelenjikComponent } from './alg-types/gelenjik/gelenjik.component';
import { SevastopolComponent } from './alg-types/sevastopol/sevastopol.component';
import { AnapaComponent } from './alg-types/anapa/anapa.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterPageComponent } from './register-page/register-page.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DescriptionBaseComponent } from './description-base/description-base.component';
import { BetonDesсComponent } from './description/search-algs/bubble-sort-desc/bubble-sort-desc.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NewBoardAdminComponent } from './new-board-admin/new-board-admin.component';
import { NewBoardModeratorComponent } from './new-board-moderator/new-board-moderator.component';
import { NewBoardUserComponent } from './new-board-user/new-board-user.component';


const appRoutes: Routes =[
  {path: '', component: AuthLayoutComponent, children: []},
  {path: '', component: SiteLayoutComponent, children: []},
  {path: 'search-algs', component:IaltaComponent},
  {path: 'trees', component:EvpatoriaComponent},
  {path: 'sort-algs', component:SochiComponent},
  {path: 'hash', component:GelenjikComponent},
  {path: 'beginer', component:SevastopolComponent},
  {path: 'data-types', component:AnapaComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'test-comp/test-comp.component.html', component:TestCompComponent},
  {path: 'register', component:RegisterPageComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  {path: 'basedesc', component: DescriptionBaseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    NavMenuComponent,
    IaltaComponent,
    EvpatoriaComponent,
    SochiComponent,
    GelenjikComponent,
    SevastopolComponent,
    AnapaComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TestCompComponent,
    ProfileComponent,
    HomeComponent,
    DescriptionBaseComponent,
    BetonDesсComponent,
    NewLoginComponent,
    NewRegisterComponent,
    NewHomeComponent,
    NewProfileComponent,
    NewBoardAdminComponent,
    NewBoardModeratorComponent,
    NewBoardUserComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}


