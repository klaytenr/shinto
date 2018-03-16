import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shinto Coin!';
  constructor(
    private _route: ActivatedRoute,
  ){}
  ngOnInit(){
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
}
