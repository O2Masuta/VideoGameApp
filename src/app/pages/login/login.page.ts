import { Component, OnInit } from '@angular/core';

import { GamesPage } from '../games/games.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
//   template: `
//   <ion-header>
//     <ion-toolbar>
//       <ion-title>Page One</ion-title>
//     </ion-toolbar>
//   </ion-header>
//   <ion-content class="ion-padding">
//     <h1>Page One</h1>
//     <ion-nav-link router-direction="forward" [component]="component">
//       <ion-button>Go to Page Two</ion-button>
//     </ion-nav-link>
//   </ion-content>
// `,
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
