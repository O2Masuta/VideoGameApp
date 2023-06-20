import { Component, OnInit } from '@angular/core';

import { GamesPage } from '../games/games.page';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  credentials = this.fb.nonNullable.group({
    email: ['Example@gmail.com', Validators.required],
    password: ['Pancakes25', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
     private authService: AuthService, 
     private loadingController: LoadingController, 
     private alertController: AlertController, 
     private router: Router
     ) { }

     get email(){
      return this.credentials.controls.email;
     }

     get password(){
      return this.credentials.controls.password;
     }

  ngOnInit() {
  }

  async login(){
    
  }

}
