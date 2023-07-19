import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  
  buttonPressedFlag = true;
  buttonLog = [];
  buttonPressedCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  buttonPressed() {
    this.buttonPressedFlag = !this.buttonPressedFlag;
    this.buttonPressedCount++;
    this.buttonLog.push(this.buttonPressedCount);
  }

  getColor() {
    if(this.buttonPressedCount >= 5){
      return "blue"
    }
    return "red"
  }

}
