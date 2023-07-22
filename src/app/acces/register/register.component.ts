import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  id: number = 0;
  email: string = '';
  password: string;
  confirmPassword: string;
  passwordError: boolean;
  

  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    // console.log(this.email);
    // console.log(this.password);
    const login = {id: this.id, email: this.email, password: this.password };
    this.http.register(login).subscribe(data => {
      console.log(data);
      this.router.navigate(["login"]);
    });
  }
}
