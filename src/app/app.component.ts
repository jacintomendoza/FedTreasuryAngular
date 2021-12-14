import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Treasury-Owned Gold';
}

