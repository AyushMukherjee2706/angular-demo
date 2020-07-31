import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { FilesComponent } from './components/files/files.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {path: 'dashboard', component: AppComponent, canActivate: [AuthGuardService]},
  {path: 'upload-file', component: FilesComponent, canActivate: [AuthGuardService]},
  {path:'all-files', component: ListFilesComponent, canActivate: [AuthGuardService]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
