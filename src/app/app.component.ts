import { Component } from '@angular/core';
import { DATA } from './mockData/data'; /* Json data for the assignment */
import { Post } from './interfaces/data'; /* Variable type for the Json data */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instag-kh';
  datas: Post[] = DATA;
} 

