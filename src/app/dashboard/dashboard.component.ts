import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 

  user = ''

  constructor(private ds: DataService,private fb: FormBuilder) {
    this.user = this.ds.username
    // access username

  }
  depositform = this.fb.group({ acno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw: ['',[Validators.required,Validators.pattern('[0-9]+')]], 
   amnt: ['',[Validators.required,Validators.pattern('[0-9]+')]] })

   
  withdrawform= this.fb.group({ acno1: ['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw1: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1: ['',[Validators.required,Validators.pattern('[0-9]+')]] })

  deposit() {

    var acno = this.depositform.value.acno
    var psw = this.depositform.value.psw
    var amnt = this.depositform.value.amnt

    const result = this.ds.deposit(acno, psw, amnt)

   if(this.depositform){
    if (result) {
      alert(`${amnt} created to your ac and the balance is${result}`)
    }
    else {
      alert("incorrect acno or password")
    }
   }else{
    alert('invalid response')
   }

  }



  withdraw() {
    var acno = this.withdrawform.value.acno1
    var psw = this.withdrawform.value.psw1
    var amnt = this.withdrawform.value.amnt1

    const result = this.ds.withdraw(acno, psw, amnt)

   if(this.withdrawform){
    if (result) {
      alert(`${amnt} debited from your account and current balance is ${result}`)
    }
   }else{
    alert('invalid response')
   }

  }


}
