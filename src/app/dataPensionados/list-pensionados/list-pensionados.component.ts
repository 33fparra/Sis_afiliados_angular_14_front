import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sipen } from 'src/app/interfaces/Sipen';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-list-pensionados',
  templateUrl: './list-pensionados.component.html',
  styleUrls: ['./list-pensionados.component.css']
})
export class ListPensionadosComponent implements OnInit {

  pensionados: Sipen[];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.http.getPensionados()
    .subscribe(data=>{
      this.pensionados=data;
    })
  }

}

