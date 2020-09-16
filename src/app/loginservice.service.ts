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
  formurl='http://localhost:3000/api/contacto/';
  _url = 'http://localhost:3000/api/usuario/login';
  post_url ='http://localhost:3000/api/productos';
  signup_url='http://localhost:3000/api/usuario';
  pedidos_url='http://localhost:3000/api/pedido';
  sellurl='http://localhost:3000/api/productos/sell';
  deleteproducturl='http://localhost:3000/api/productos/';
  paginasurl='http://localhost:3000/api/visita/';
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
        localStorage.setItem('user',response.Nombre)
        localStorage.setItem('token', this.token)
        console.log( "ser",this.token);
        
      });
    
    return this._http.post<any>(this._url, userData);
  }
  getpedido(){
    localStorage.getItem('token')
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
                                                                                                                                                                                 
    return this._http.get(this.pedidos_url, requestOptions);
  }
  getvisita(){
    
    localStorage.getItem('token')
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
                                                                                                                                                                                 
    return this._http.get(this.paginasurl, requestOptions);
  }
  getproduct(){
    const productos= new Array()
    localStorage.getItem('token')
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
                                                                                                                                                                                 
    this._http.get(this.post_url, requestOptions).subscribe(
      result => {
        for(let clave in result){
          if (result.hasOwnProperty(clave)) {
            productos.push(result[clave])
          }
          console.log(productos);
          
        }
      },
      error =>{ 
        console.log(<any>error);
      }
    )
    
    return productos;
  }
  buyproduct(id:number){
    console.log("Selling 1 form id ",id);
    const Data={
      'id': id
    }
    
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
    }
    console.log(JSON.stringify(Data))
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
      body: Data
    };
    return this._http.post(this.sellurl, Data);
  }
  deleteproduct(id:number){
    console.log("Deleting 1 form id ",id);
    const Data={
      'id': id
    }
    
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
    }
    console.log(JSON.stringify(Data))
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
      body: Data
    };
    return this._http.delete(this.deleteproducturl+id.toString());
  }
  getproducts(){
    localStorage.getItem('token')
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': localStorage.getItem('token'),
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
    return this._http.post<any>(this.formurl,Data);
  }
  
}
