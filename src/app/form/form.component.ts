import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,private loginservice: LoginserviceService) {this.createForm(); }
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
       Mensaje: ['', Validators.required ],
       Nacimiento: ['', Validators.required ],
       Sexo: ['', Validators.required ],
       Categoria: ['', Validators.required ]
       
    });
  }
  sendForm(){
    this.loginservice.sendform(this.angForm.value).subscribe
  }

}
