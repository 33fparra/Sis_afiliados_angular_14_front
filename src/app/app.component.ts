import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Front';


constructor(private router:Router){}

Login(){
  this.router.navigate(["login"]);
}
Register(){
  this.router.navigate(["register"]);
}

Listar(){
  this.router.navigate(["listar"]); //debe ser igual al nombre que pusimos en APP.ROUTING.MODULE.TS
}
ListarPensionados(){
  this.router.navigate(["listarPen"]); 
}
ListarExcluidos(){
  this.router.navigate(["listarExc"]); 
}
Agregar(){
  this.router.navigate(["agregar"]);
}
AgregarPensionados(){
  this.router.navigate(["agregarPen"]); 
}
AgregarExcluidos(){
  this.router.navigate(["agregarExc"]); 
}
Editar(){
  this.router.navigate(["editar"]);
}
EditarPensionados(){
  this.router.navigate(["editarPen"]);
}
EditarExcluidos(){
  this.router.navigate(["editarExc"]);
}

}