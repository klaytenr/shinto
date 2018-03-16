import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  logs = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.viewAllLogs();
  }
  viewAllLogs(){
    this.logs = this._httpService.viewLogs();
  }
}
