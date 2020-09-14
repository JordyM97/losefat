import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  userData: any;
  userTipo: any;
  _url = 'http://localhost:3000/api/usuario/login';
  post_url ='http://localhost:3000/api/productos';
  signup_url='http://localhost:3000/api/usuario';
  constructor(private _http: HttpClient) {
    this.userData= {};
   }
  setUserData(val: object){
    this.userData= val;
  }
  getUserData(){
    return this.userData;
  }
  getUserTipo(){
    return this.userTipo;
  }
  nonrelat(){
    const non="https://losefat-f27a.restdb.io/rest/paginas";
    return this._http.get<any>(non);
  }
  login (userData): any{

    this._http.post<any>(this._url, userData).subscribe(
      (response)=>{
        this.userData=response
        this.userTipo=response.Tipo
      });
    
    return this._http.post<any>(this._url, userData);
  }
  getproducts(): Observable<any>{
    return this._http.get<any>(this.post_url);
  }
  signup(Data: any): any{
    this._http.post<any>(this.signup_url, Data).subscribe(
      (response)=>{
        this.userData=response
      });
    console.log("Service:",this.userData)
    return this._http.post<any>(this._url, Data);

  }
  
}
