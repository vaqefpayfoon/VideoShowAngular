import { Routes } from '@angular/router';
import { EducationFileComponent } from './education-list/education-file/education-file.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

export const routes: Routes = [
    { path: '', component: MainPanelComponent, children: [
        { path: ':id', component: EducationFileComponent },
    ] },
]