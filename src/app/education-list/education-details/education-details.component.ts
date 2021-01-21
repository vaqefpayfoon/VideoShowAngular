import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentList } from 'src/@models/document-list';
import { EducationalTopic } from 'src/@models/educational-topic';
import { Document } from 'src/@models/document';
import { EducationService } from 'src/@services/education.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  @Input() educationTopic : EducationalTopic;
  
  documentlist: DocumentList;

  documents: Document[]

  constructor(private route: ActivatedRoute,
    private educationService: EducationService,
    private router: Router) { }
  //http://172.18.60.4:8097/documents/educationaltopics/byentity/c46a118f-4653-eb11-a778-005056b4efa1
  ngOnInit(): void {

    this.educationService.getDocumentList(this.educationTopic.educationalTopicId).subscribe((documentlist: DocumentList) => {
      this.documentlist = documentlist;
      this.documents = documentlist.documents;
    })
  }
  @Output() featureSelected = new EventEmitter<Document>();
  navigation(document) {
    //this.router.navigate(['/education', id]);
    this.featureSelected.emit(document);
  }

}
