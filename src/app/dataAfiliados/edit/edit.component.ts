import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slafi } from 'src/app/interfaces/Slafi';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  modelSlafi: Slafi= new Slafi();
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.http.getAfiliadoId(this.modelSlafi.id) //verificar
    .subscribe(data=>{
      this.modelSlafi=data;
    });

  }
}
