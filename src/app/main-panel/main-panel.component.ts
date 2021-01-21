import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  document: Document;
  @Output() featureSelected = new EventEmitter<Document>();
  onNavigate(document: Document) {
    this.document = document;    
  }
  
}
