import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slafi } from 'src/app/interfaces/Slafi';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  modelSlafi: Slafi= new Slafi();
  constructor(private router:Router, private http:ServiceService ) { }

  ngOnInit() {
  }

  Agregar(slafi:Slafi){
    this.http.guardarAfiliado(slafi)
    .subscribe(data=>{
      alert("Afiliado" + slafi.nombre + " "+ slafi.apellido+ "se agregó exitosamente");
      this.modelSlafi=data //verificacion
      this.router.navigate(["list"]);
    })
  }
}