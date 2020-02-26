import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor() { }

  /* variable initialization for unfilled heart */
  like: boolean = false;

  /* function to toggle unfilled heart and filled heart */
  toggle(){
    this.like= !this.like;
    /* function to avoid screem scroll up to the first post */
   /*  event.preventDefault(); */
    console.log(this.like);
  }

  ngOnInit() {
  }

}
