import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationDetailsComponent } from './education-list/education-details/education-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './router';
import { EducationService } from 'src/@services/education.service';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { EducationFileComponent } from './education-list/education-file/education-file.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AppComponent,
    EducationListComponent,
    EducationDetailsComponent,
    MainPanelComponent,
    EducationFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [EducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
