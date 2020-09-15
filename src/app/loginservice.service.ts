import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  userData: any;
  userTipo: any;
  public token: any;
  header: any
  formurl='http://localhost:3000/api/usuario/login';
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
        this.token=response.Token
        console.log( "ser",this.token);
        
      });
    
    return this._http.post<any>(this._url, userData);
  }
  getproducts(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': this.token,
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
                                                                                                                                                                                 
    return this._http.get(this.post_url, requestOptions);
  }
  signup(Data: any): any{
    this._http.post<any>(this.signup_url, Data).subscribe(
      (response)=>{
        this.userData=response
      });
    console.log("Service:",this.userData)
    return this._http.post<any>(this._url, Data);

  }
  sendform(Data: any): any{
    this._http.post<any>(this.formurl,Data);
  }
  
}
