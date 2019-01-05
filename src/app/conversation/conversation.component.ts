import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './../models/user';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  friendId: number;
  friend: User;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) {
    this.friendId = this.activeRoute.snapshot.params['uid'];
  }

  ngOnInit() {
    this.friend = this.dataService.friendUid(this.friendId);
  }

}
