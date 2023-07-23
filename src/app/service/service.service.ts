import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Slafi } from '../interfaces/Slafi';
import { Sipen } from '../interfaces/Sipen';
import { Scex } from '../interfaces/Scex';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  Url='http://localhost:8081/API';

  login(login:Login): Observable<any>{
    return this.http.post<Login>(this.Url+"/login", login);
  }

  register(login:Login): Observable<any> {
    return this.http.post<Login>(this.Url+"/login", login);;
  }

  getAfiliado(){
    return this.http.get<Slafi[]>(this.Url+"/slafi");
  }
  guardarAfiliado(slafi:Slafi){
    return this.http.post<Slafi>(this.Url+"/slafi",slafi);
  }
  getAfiliadoId(id:number){
    return this.http.get<Slafi>(this.Url+"/slafi"+ "/"+ id); //verificamos 
  }
  editarAfiliado(slafi:Slafi){
    return this.http.put<Slafi>(this.Url+"/slafi"+ "/"+ slafi.id, slafi);
  }

  getPensionados(){
    return this.http.get<Sipen[]>(this.Url+"/sipen");
  }
  guardarPensionado(sipen:Sipen){
    return this.http.post<Sipen>(this.Url+"/sipen",sipen); //verificamos 
  }


  getExcluidos(){
    return this.http.get<Scex[]>(this.Url+"/scex");
  }
  guardarExcluido(scex:Scex){
    return this.http.post<Scex>(this.Url+"/scex",scex); //verificamos 
  }
}
