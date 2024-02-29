import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LightInfoComponent } from './components/light-info/light-info.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FindPostsComponent } from './pages/find-posts/find-posts.component';
import { MyReservationComponent } from './pages/my-reservation/my-reservation.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {FirstService} from "./services/first-service/first.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";
import {FormsModule} from "@angular/forms";
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { ConfirmReservationComponent } from './pages/confirm-reservation/confirm-reservation.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { AcceptReservationComponent } from './pages/accept-reservation/accept-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDashboardComponent,
    LightInfoComponent,
    MyPostsComponent,
    NewPostComponent,
    ProfileComponent,
    FindPostsComponent,
    MyReservationComponent,
    NewMessageComponent,
    MyMessagesComponent,
    ManageUsersComponent,
    MainPageComponent,
    NewReservationComponent,
    MainAdminPageComponent,
    AdminDashboardComponent,
    ConfirmRegisterComponent,
    AccessDeniedComponent,
    ConfirmReservationComponent,
    PostDetailsComponent,
    AcceptReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  // quels sont les services que je dois fournir au bootstrap pu boen au démarrage del'app
  //au démarrage de lapp ce service sera dispo auniveau del'app
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi : true // cad on peut avoir plusieurs intercépteur et celui la cest lun des inetrcepteur que je veux exécuter
    },
    HttpClient


  ],// les services dispo au démarrage de l'app accessible pour toute lapp
  bootstrap: [AppComponent]
})
export class AppModule { }
