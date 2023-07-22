import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//register login
import { LoginComponent } from './acces/login/login.component';
import { RegisterComponent } from './acces/register/register.component';
//dataAfiliados
import { ListComponent } from './dataAfiliados/list/list.component';
import { AddComponent } from './dataAfiliados/add/add.component';
import { EditComponent } from './dataAfiliados/edit/edit.component';
//dataExcluidos
import { ListPensionadosComponent } from './dataPensionados/list-pensionados/list-pensionados.component';
import { AddPensionadosComponent } from './dataPensionados/add-pensionados/add-pensionados.component';
import { EditPensionadosComponent } from './dataPensionados/edit-pensionados/edit-pensionados.component';
//dataExcluidos
import { ListExcluidosComponent } from './dataExcluidos/list-excluidos/list-excluidos.component';
import { AddExcluidosComponent } from './dataExcluidos/add-excluidos/add-excluidos.component';
import { EditExcluidosComponent } from './dataExcluidos/edit-excluidos/edit-excluidos.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'list', component:ListComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'list-pensionados', component:ListPensionadosComponent},
  {path:'add-pensionados', component:AddPensionadosComponent},
  {path:'edit-pensionados', component:EditPensionadosComponent},
  {path:'list-excluidos', component:ListExcluidosComponent},
  {path:'add-excluidos', component:AddExcluidosComponent},
  {path:'edit-excluidos', component:EditExcluidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
