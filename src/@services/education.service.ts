import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DocumentList } from "../@models/document-list";
import { Document } from "../@models/document";
import { EducationTopicList } from "../@models/education-topic-list";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
    baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getDocumentList(id): Observable<DocumentList> {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    });
    
    return this.http.get<DocumentList>(this.baseUrl + 'documents/educationaltopics/byentity/' + id, {headers: headers});
  }
  
  getDocument(id): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'documents/' + id);
  }

  getDocumentInfo(id): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'documents/docinfo/' + id);
  }


  getEducationTopics(): Observable<EducationTopicList> {
    return this.http.get<EducationTopicList>(this.baseUrl + 'educationaltopics');
  }
}