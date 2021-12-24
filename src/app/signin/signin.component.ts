import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service'; 
import { TokenStorageService } from '../services/token-storage.service'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
    constructor(private authService: AuthServiceService,private tokenStorage:TokenStorageService, private router: Router) { }
 
    ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['category'])
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      resp => {
        console.log(resp.access_token);
        this.tokenStorage.saveToken(resp.access_token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       this.router.navigate(['category']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  signUp(){
    this.router.navigate(['signUp'])
  }

}
