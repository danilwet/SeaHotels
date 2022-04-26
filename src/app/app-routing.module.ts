import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NewBoardUserComponent } from './new-board-user/new-board-user.component';
import { NewBoardModeratorComponent } from './new-board-moderator/new-board-moderator.component';
import { NewBoardAdminComponent } from './new-board-admin/new-board-admin.component';
const routes: Routes = [
  { path: 'new_home', component: NewHomeComponent },
  { path: 'new_login', component: NewLoginComponent },
  { path: 'new_register', component: NewRegisterComponent },
  { path: 'new_profile', component: NewProfileComponent },
  { path: 'new_user', component: NewBoardUserComponent },
  { path: 'new_mod', component: NewBoardModeratorComponent },
  { path: 'new_admin', component: NewBoardAdminComponent },
  { path: '', redirectTo: 'new_home', pathMatch: 'full' }
];
@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
