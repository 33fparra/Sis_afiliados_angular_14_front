import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scex } from 'src/app/interfaces/Scex';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list-excluidos',
  templateUrl: './list-excluidos.component.html',
  styleUrls: ['./list-excluidos.component.css']
})
export class ListExcluidosComponent implements OnInit {

  excluidos: Scex[];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.http.getExcluidos()
    .subscribe(data=>{
      this.excluidos=data;
    })
  }

}

