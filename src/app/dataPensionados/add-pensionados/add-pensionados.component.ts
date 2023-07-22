import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sipen } from 'src/app/interfaces/Sipen';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-pensionados',
  templateUrl: './add-pensionados.component.html',
  styleUrls: ['./add-pensionados.component.css']
})
export class AddPensionadosComponent implements OnInit {


  constructor(private router:Router, private http:ServiceService) { }

  ngOnInit(): void {
  }

  modelSipen = new Sipen();

  AgregarPensionado(sipen:Sipen){
    this.http.guardarPensionado(sipen)
    .subscribe(data=>{
      alert("El pensionado " + sipen.nombre + " "+ sipen.apellido+ " se agregó exitosamente");
      this.modelSipen=data //verificar implementación
      this.router.navigate(["list-pensionados"]);
    })
  }
}