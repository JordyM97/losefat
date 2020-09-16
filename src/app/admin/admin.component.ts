import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public name:string
  constructor(private loginservice: LoginserviceService, private router: Router) { }
  
  public productos = new Array();
  public paginas = new Array();
  ngOnInit() {
    this.name=localStorage.getItem("user"),
    this.loginservice.getproducts().subscribe(
      result => {
        for(let clave in result){
          if (result.hasOwnProperty(clave)) {
            this.productos.push(result[clave])
          }
          console.log(this.productos);
          
        }
      },
      error =>{ console.log(<any>error);
      }
    )

    }
    onDelete(){}
    getnon(){
      
    }
    deleteproduct(id:number){
      this.loginservice.deleteproduct(id).subscribe(result =>{
        console.log(result);
      });
      this.router.navigateByUrl("/admin")
    }


}
