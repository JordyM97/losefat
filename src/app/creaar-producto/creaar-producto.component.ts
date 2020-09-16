import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-creaar-producto',
  templateUrl: './creaar-producto.component.html',
  styleUrls: ['./creaar-producto.component.css']
})
export class CreaarProductoComponent implements OnInit {

  constructor(private fb: FormBuilder,private loginservice: LoginserviceService,private router:Router) {this.createForm(); }
  angForm: FormGroup;
  ngOnInit() {
    //this.loginservice.nonrelat().subscribe(response=>{
    // console.log(response);
    //})
  }
  createForm() {
    this.angForm = this.fb.group({
      
       Nombre: ['', Validators.required ],
       Apellido: ['', Validators.required ],
       Email: ['', Validators.required ],
       Birth: ['', Validators.required ],
       Genero: ['', Validators.required ],
       Categoria: ['', Validators.required ],
       Mensaje: ['', Validators.required ]
       
    });
  }
}
