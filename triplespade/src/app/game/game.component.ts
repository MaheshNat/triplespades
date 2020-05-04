import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  name = 'anony';

  constructor(private user: UserService) { }

  ngOnInit() {
   this.name = this.user.username;
   console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}
