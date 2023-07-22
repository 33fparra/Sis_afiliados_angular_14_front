import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './acces/login/login.component';
import { RegisterComponent } from './acces/register/register.component';
import { AddComponent } from './dataAfiliados/add/add.component';
import { EditComponent } from './dataAfiliados/edit/edit.component';
import { ListComponent } from './dataAfiliados/list/list.component';
import { AddExcluidosComponent } from './dataExcluidos/add-excluidos/add-excluidos.component';
import { EditExcluidosComponent } from './dataExcluidos/edit-excluidos/edit-excluidos.component';
import { ListExcluidosComponent } from './dataExcluidos/list-excluidos/list-excluidos.component';
import { EditPensionadosComponent } from './dataPensionados/edit-pensionados/edit-pensionados.component';
import { AddPensionadosComponent } from './dataPensionados/add-pensionados/add-pensionados.component';
import { ListPensionadosComponent } from './dataPensionados/list-pensionados/list-pensionados.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddExcluidosComponent,
    EditExcluidosComponent,
    ListExcluidosComponent,
    EditPensionadosComponent,
    AddPensionadosComponent,
    ListPensionadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
