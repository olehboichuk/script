import {Component, OnInit} from '@angular/core';
import {MessageService} from "../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  private _authService: MessageService;


  constructor(private authService: MessageService) {
    this._authService = authService;
  }



  ngOnInit() {

  }
}
