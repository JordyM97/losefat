import { Component, OnInit } from '@angular/core';
import { any } from 'sequelize/types/lib/operators';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  public producto:any;
  productos=new Array();
  id:any;
  constructor(private loginservice:LoginserviceService) { 
    this.id=localStorage.getItem('producto');
  }

  ngOnInit() {
    console.log(this.id)
    const _id = localStorage.getItem('producto') 
    this.productos= this.loginservice.getproduct()
    this.productos.forEach(producto => {
      if(producto.id==_id){ this.producto=producto}
      
    });
  }

}
