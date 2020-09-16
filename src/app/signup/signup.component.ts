import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private Loginservice: LoginserviceService,private router:Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm() {
    this.angForm = this.fb.group({
       Cedula: ['', Validators.required ],
       Nombre: ['', Validators.required ],
       Apellido: ['', Validators.required ],
       Email: ['', Validators.required ],
       Username: ['', Validators.required ],
       Password: ['', Validators.required ]
       
    });
  }
  async signup(){
    console.log(this.angForm.value)
    await this.Loginservice.signup(this.angForm.value).subscribe(
      (response)=>{
        if(response){
            console.log("Done");
            this.router.navigateByUrl('/login');
          }else{
            console.log("Something went wrong");
            this.router.navigateByUrl('/signup');
          }
      }
   );
  }
}
