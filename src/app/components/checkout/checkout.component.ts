import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  selectedPaymentMethod:any
  paymentMethods=[
    'VISA',
    'PAYPAL',
    'CASH_ON_DELIVERY',
    'MASTERCARD'
  ]
  constructor(private fb:FormBuilder) { }
  firstFormGroup:FormGroup
  secondFormGroup:FormGroup
  thirdFormGroup:FormGroup
  ngOnInit() {
    this.firstFormGroup=this.fb.group({
      name:'',
      email:'',
      male:'',
      female:'',
      Birthdate:'',
      privacy:''
    })

    this.secondFormGroup=this.fb.group({
      address:''
    })

    this.thirdFormGroup=this.fb.group({
      payment_method:''
    })
  }

}
