import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EducationTopicList } from 'src/@models/education-topic-list';
import { EducationalTopic } from 'src/@models/educational-topic';
import { EducationService } from 'src/@services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  educationTopicList: EducationTopicList;
  educationTopics: EducationalTopic[];

  customClass: string = 'customClass';
  isFirstOpen = true;
  oneAtATime: boolean = true;
  
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {

    this.educationService.getEducationTopics().subscribe((educationTopicList: EducationTopicList) => {
      this.educationTopicList = educationTopicList;
      this.educationTopics = educationTopicList.educationalTopics;      
    });
  }
  @Output() featureSelected = new EventEmitter<Document>();
  onNavigate(document: Document) {
    this.featureSelected.emit(document);
  }

}
