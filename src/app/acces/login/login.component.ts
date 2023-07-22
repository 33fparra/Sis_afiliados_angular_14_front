import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: number = 0;
  email: string;
  password: string;

  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit()  {
    // TODO document why this method 'ngOnInit' is empty
  }
  login() {
    const login = {id: this.id, email: this.email, password: this.password};
    this.http.login(login).subscribe( data => {
      console.log(data);
      this.router.navigate(["list"]);
    });
  }
}
