import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  sendForm(){
    console.log(this.angForm.value)
    return this.loginservice.sendform(this.angForm.value).subscribe((response)=>{
      if(response){
        console.log("Done");
        this.router.navigateByUrl('/login');
      }else{
        console.log("Something went wrong");
        this.router.navigateByUrl('/signup');
      }
      
    })
  }

}
