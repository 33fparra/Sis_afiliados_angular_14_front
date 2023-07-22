import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scex } from 'src/app/interfaces/Scex';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-excluidos',
  templateUrl: './add-excluidos.component.html',
  styleUrls: ['./add-excluidos.component.css']
})
export class AddExcluidosComponent implements OnInit {

  constructor(private router:Router, private http:ServiceService) { }

  ngOnInit(): void {
  }
  modelScex = new Scex();

  AgregarExcluido(scex:Scex){
    this.http.guardarExcluido(scex)
    .subscribe(data=>{
      alert("El individuo Excluido " + scex.nombre + " "+ scex.apellido+ " se agregó con exito");
      this.modelScex=data //verificar implementación
      this.router.navigate(["list-excluidos"]);
    })
  }


}
