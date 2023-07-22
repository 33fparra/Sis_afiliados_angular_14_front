import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slafi } from 'src/app/interfaces/Slafi';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  afiliado: Slafi[];
  suma: number;
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(){
    this.http.getAfiliado()
    .subscribe(data=>{
      this.afiliado=data;
    })
  }

  Editar(afiliado:Slafi): void{
    localStorage.setItem("id", afiliado.id.toString());
    this.router.navigate(["edit"]);
  }
}
