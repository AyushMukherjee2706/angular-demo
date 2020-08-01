import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilesComponent } from "./components/files/files.component";
import { ListFilesComponent } from "./components/list-files/list-files.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    ListFilesComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
