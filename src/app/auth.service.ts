import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getMoviePigaion(pageNumber: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private _HttpClinet:HttpClient,private _Router:Router) {
    if(localStorage.getItem(`userSession`) != null){
      this.saveCurrentUser();
    }
  }

  currentUser = new BehaviorSubject(null);
  userName:any;

  saveCurrentUser(){
    let token:any = localStorage.getItem(`userSession`)
    this.currentUser.next(jwtDecode(token))
    this.userName = this.currentUser.value
  }

  register(finalRegForm:object):Observable<any>
  {
    return this._HttpClinet.post(`https://route-egypt-api.herokuapp.com/signup`, finalRegForm);
  }

  login(finalLoginForm:object):Observable<any>{
    return this._HttpClinet.post(`https://route-egypt-api.herokuapp.com/signin`, finalLoginForm)
  }

  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem('userSession')
    this._Router.navigate(['/login'])
  }
}
