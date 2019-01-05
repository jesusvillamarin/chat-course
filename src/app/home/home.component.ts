import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { User } from './../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  user: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.dataFriends;
  }
}
