import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  name:any

  registerForm:FormGroup = new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    usertype:new FormControl(null,Validators.required),
    description:new FormControl('null', Validators.required)
  })

  secondForm!: FormGroup; 

  constructor( private fb:FormBuilder) { }

  ngOnInit() { 
    // this.registerForm = this.fb.group({
    //   username: new FormControl('Viking', Validators.required),
    //   usertype: new FormControl('Students'),
    //   description: new FormControl('Tough guy'),
    // })

    const newUserObj = {
      'username' : 'Viking',
      'usertype':'Developer',
      'description':'Tough guy',
    }
    //setValue need to have all the keys and values
    this.registerForm.setValue(newUserObj);

    const newUserDes = {
      'description':'MEAN stack developer',
    }
    this.registerForm.patchValue(newUserDes);

    // //example 1 simple FormArray
    // let users = new FormArray([
    //   new FormControl('ABC'),
    //   new FormControl('EFG'),
    // ]);
    // console.log(users);
    // console.log(users.value);
    // console.log(JSON.stringify(users.value))

    this.secondForm = this.fb.group({
      'username': new FormControl('Sam', Validators.required),
      'usertype': new FormControl('employee'),
      'description': new FormControl('fitness guy'),
      'users': new FormArray([
        new FormControl('ABC'),
        new FormControl('EFG')
      ]),
      'usersC': new FormArray([
        this.fb.group({
          'name': new FormControl('amy'),
          'age': new FormControl('16'),
          'dept': new FormControl('6 inch'),
        })
      ])
    })


  }

  get f(){
    return this.registerForm.controls;
  }

  get secondFormGroups(){
    return this.secondForm.get('users') as FormArray;
  }

  get secondFormGroupsC(){
    return this.secondForm.get('usersC') as FormArray;
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid Form'); 
      this.name = 'Invalid Form';
      return;
    }
    console.log(JSON.stringify(this.registerForm.value));
    this.name = JSON.stringify(this.registerForm.value);
    this.registerForm.valueChanges.subscribe(data => {
      console.log(data);
    })
    console.log(this.registerForm.valid);
    console.log(this.registerForm.invalid);
    console.log(this.registerForm.pending);
    console.log(this.registerForm.pristine);
    console.log(this.registerForm.dirty);
    console.log(this.registerForm.touched);
    console.log(this.registerForm.untouched);
  }

  registerS(){
    if(!this.secondForm.valid){
      console.log('Invalid Form'); 
      this.name = 'Invalid Form';
      return;
    }
    console.log(JSON.stringify(this.secondForm.value));
    this.name = JSON.stringify(this.secondForm.value);
    this.secondForm.valueChanges.subscribe(data => {
      console.log(data);
    })
    console.log(this.secondForm.valid);
    console.log(this.secondForm.invalid);
    console.log(this.secondForm.pending);
    console.log(this.secondForm.pristine);
    console.log(this.secondForm.dirty);
    console.log(this.secondForm.touched);
    console.log(this.secondForm.untouched);
  }



  // onClick(){
  //   if(!this.formValid.valid){
  //     console.log('error! Invalid!');
  //     return;
  //   }
  //   console.log(JSON.stringify(this.formValid.value))
  // }

}
