import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Document } from 'src/@models/document';
import { EducationService } from 'src/@services/education.service';

@Component({
  selector: 'app-education-file',
  templateUrl: './education-file.component.html',
  styleUrls: ['./education-file.component.css']
})
export class EducationFileComponent implements OnInit, OnChanges, AfterViewInit   {

  
  id: number;
  videoUrl: string = "";
  intitVideo: any;

  @ViewChild('videoplayer', {static: false}) videoplayer: ElementRef;

  constructor(private educationService: EducationService, private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  @Input() document : Document;
  ngOnChanges(changes: SimpleChanges) {
  this.videoUrl = "";
    if(changes.document.currentValue === undefined)
      return;
    if(this.document.type == 'mp4') {      
      
      this.videoUrl = this.educationService.baseUrl + 'documents/' + changes.document.currentValue.documentId + "/display";
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    } else if(this.document.type == 'pdf') {
      this.videoUrl = "";
      var win = window.open(this.educationService.baseUrl + 'documents/' + changes.document.currentValue.documentId + "/display", '_blank');
      win.focus();
    } else {
      this.videoUrl = "";
      var win = window.open(this.educationService.baseUrl + 'documents/' + changes.document.currentValue.documentId);
    }
  }
}
