import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fade } from './../../animtaions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fade],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService,private _Router:Router) {}

  error:string = ``
  success:string = ``

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(`^[A-Z][a-z0-9]{3,8}$`),
    ]),
  });

  submitLoginForm(loginFormParam: FormGroup){
    
    this._AuthService.login(loginFormParam.value).subscribe((response) => {
      if(response.message == `success`)
      {
        localStorage.setItem(`userSession`, response.token)
        this._AuthService.saveCurrentUser();
        this.error = ``
        this.success = response.message;
        setTimeout(() =>{
          this._Router.navigate(['/home'])
        },1000)
      }
      else
      {
        this.success = ``
        this.error = response.message
      }
  })
}

  ngOnInit(): void {}
}
