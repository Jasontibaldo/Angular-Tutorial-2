import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-task',
  templateUrl: './username-task.component.html',
  styleUrls: ['./username-task.component.css']
})
export class UsernameTaskComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameEmpty(): boolean{
    return this.username.length != 0;
  }

  clearUsername(): void{
    this.username = '';
  }

}
