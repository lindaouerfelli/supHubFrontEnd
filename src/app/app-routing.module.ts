import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {UserDashboardComponent} from "./pages/user-dashboard/user-dashboard.component";
import {MyPostsComponent} from "./pages/my-posts/my-posts.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NewPostComponent} from "./pages/new-post/new-post.component";
import {MyMessagesComponent} from "./pages/my-messages/my-messages.component";
import {NewMessageComponent} from "./pages/new-message/new-message.component";
import {MyReservationComponent} from "./pages/my-reservation/my-reservation.component";
import {FindPostsComponent} from "./pages/find-posts/find-posts.component";
import {ManageUsersComponent} from "./admin/manage-users/manage-users.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {NewReservationComponent} from "./pages/new-reservation/new-reservation.component";
import {MainAdminPageComponent} from "./admin/main-admin-page/main-admin-page.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {ConfirmRegisterComponent} from "./pages/confirm-register/confirm-register.component";
import {TokenGuardService} from "./services/guard/token-guard/token-guard.service";
import {AdminGuardService} from "./services/guard/admin-guard/admin-guard.service";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";
import {ConfirmReservationComponent} from "./pages/confirm-reservation/confirm-reservation.component";
import {PostDetailsComponent} from "./pages/post-details/post-details.component";

const routes: Routes = [

  {
    path : 'login',
    component : LoginComponent
  },

  {
    path : 'register',
    component : RegisterComponent
  },

  {
    path : 'confirm-register',
    component : ConfirmRegisterComponent
  },

  {
    path : 'confirm-reservation',
    component : ConfirmReservationComponent
  },

  {
    path : 'access-denied',
    component : AccessDeniedComponent
  },

  {
    path : 'post-details/:id',
    component : PostDetailsComponent
  },


  {
    path : 'user',
    component : MainPageComponent, // jai fais ca pour que ces interfaces ces compsoants ne soient pas affichés que pour le user sous /user et pareil on va faire poru ladmin
    canActivate : [TokenGuardService],
    children : [


      {
        path : 'dashboard',
        component : UserDashboardComponent
      },

      {
        path : 'my-posts',
        component : MyPostsComponent
      },

      {
        path : 'new-post',
        component : NewPostComponent
      },

      {
        path : 'new-post/:idPost',
        component : NewPostComponent
      },

      {
        path : 'my-messages',
        component : MyMessagesComponent
      },

      {
        path : 'new-message',
        component : NewMessageComponent
      },

      {
        path : 'my-reservations',
        component : MyReservationComponent
      },

      {
        path : 'new-reservation',
        component : NewReservationComponent
      },

      {
        path : 'find-posts',
        component : FindPostsComponent
      },

      {
        path : 'my-profile',
        component : ProfileComponent
      },

      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      }

    ]
  },

  {
    path : 'admin',
    component : MainAdminPageComponent,
    canActivate : [TokenGuardService, AdminGuardService],
    children : [

      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },

      {
        path: 'my-profile',
        component: ProfileComponent
      },

      {
        path : 'users',
        component : ManageUsersComponent
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
