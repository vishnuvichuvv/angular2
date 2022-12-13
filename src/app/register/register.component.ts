import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // uname=''
  // acnum=''
  // psw=''
  // for special characters -[^0-9a-zA-Z]

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]{4}')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]{3}')]]})
    
  register(){
  var uname=this.registerForm.value.uname
  var acnum=this.registerForm.value.acno
  var psw=this.registerForm.value.psw

  const result=this.ds.register(acnum,uname,psw)

if(this.registerForm.valid){
  if(result){
    alert(" registration successful")
    this.router.navigateByUrl('')
  }
  else{
    alert("user already exist")
    this.router.navigateByUrl('')
  }

  }
  else{
    alert('something wrong in the form')
  }
}

}
