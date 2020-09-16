import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  public pedidos= new Array();
  constructor(private loginservice:LoginserviceService) { }

  ngOnInit() {
    this.loginservice.getpedido().subscribe(response=>{
      for(let clave in response){
        if (response.hasOwnProperty(clave)) {
          this.pedidos.push(response[clave])
        }
        console.log(this.pedidos);
        
      }
    })
  }

}
