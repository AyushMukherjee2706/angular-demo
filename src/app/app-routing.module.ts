import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { FilesComponent } from './components/files/files.component';


const routes: Routes = [
  {path: 'upload-file', component: FilesComponent},
  {path:'all-files', component: ListFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
