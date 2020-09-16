import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service'

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  user: any
  UserData:JSON = <JSON><unknown>{
    Token: "",
    Email: "jpazmi@gmail.com",
    Password: "1234567"
  };
  token;
  angForm: FormGroup;
  
  constructor(private _loginservice: LoginserviceService, private fb: FormBuilder,private router:Router) { 
    this.createForm();
  }

  ngOnInit() {
    
    //console.log("datos enviiados", JSON.stringify(this.UserData));
  }
  
  createForm() {
    this.angForm = this.fb.group({
       Email: ['', Validators.required ],
       Password: ['', Validators.required ]
    });
  }
  async onSubmit(){
  
    console.log("A",this.angForm.value);

     await this._loginservice.login(this.angForm.value).subscribe(
       (response)=>{
         if(response){
           if(response.Tipo=="Admin"){
             console.log("Admin");
             this.router.navigateByUrl('/admin');
           }else{
             console.log("Cliente");
             this.router.navigateByUrl('/producto');
           }
         }else{
            console.log(response)
         }
       }
    );
  }
}
