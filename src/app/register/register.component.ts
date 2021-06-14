import { AuthService } from './../auth.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fade } from 'src/animtaions';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fade],
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  error:string = ''
  success:string = ''
  // To not allow users to change the type attr from inspect
  hidePass() {
    $("#password").attr("type", "password")
  }

  // Reactive registeration form
  registerForm: FormGroup = new FormGroup(
    {
      first_name: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.min(3), Validators.pattern(`^[A-Z][a-z]{3,10}$`)]),
      last_name: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.min(3), Validators.pattern(`^[A-Z][a-z]{3,10}$`)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
      age: new FormControl(null, [Validators.required, Validators.max(80), Validators.min(18)]),
    })

  // Gets called when form is submitted
  submitForm(formValues: FormGroup) {
    this._AuthService.register(formValues.value).subscribe((response) => {
      if(response.message == `success`){
        this.error = ''
        this.success = response.message
        setTimeout(() => {
          this._Router.navigate([`/login`])
        },1000)
      }
      else{
        this.success = ''
        this.error = response.errors.email.message
      }
    })
  }


  ngOnInit(): void {
    this.hidePass()
  }
}