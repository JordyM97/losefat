import { Component, OnInit } from '@angular/core';

import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers: [LoginserviceService]
})
export class ProductosListComponent implements OnInit {
  public productos = new Array();
  constructor(private loginservice: LoginserviceService) { }

  ngOnInit() {
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

}
