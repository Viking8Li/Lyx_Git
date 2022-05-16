import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  name:any

  // formValid:FormGroup = new FormGroup({
  //   name: new FormControl(null,[Validators.required,Validators.minLength(4)])
  // })
  registerForm:FormGroup = new FormGroup({
    // email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    //password:new FormControl(null,Validators.required),
    //cpass:new FormControl(null,Validators.required)
  })

  constructor() { }

  ngOnInit() {
  }

  get f(){
    return this.registerForm.controls;
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid Form'); 
      this.name = 'Invalid Form';
      return;
    }
    console.log(JSON.stringify(this.registerForm.value));
    this.name = JSON.stringify(this.registerForm.value);
  }

  // onClick(){
  //   if(!this.formValid.valid){
  //     console.log('error! Invalid!');
  //     return;
  //   }
  //   console.log(JSON.stringify(this.formValid.value))
  // }

}
