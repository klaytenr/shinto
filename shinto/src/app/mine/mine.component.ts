import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  coinAmount = 0;
  logs = [];
  guess: string;
  answer = 'happiness';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  addToAmount(){
    if(this.guess == this.answer){
      this.coinAmount = this._httpService.mine();
    }else{
      console.log('wrong answer');
    }
  }
}
