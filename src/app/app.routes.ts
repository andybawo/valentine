import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { QuestionComponent } from './question/question.component';
import { NoAnswerComponent } from './no-answer/no-answer.component';
import { YesAnswerComponent } from './yes-answer/yes-answer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'no-answer',
        component: NoAnswerComponent,
      },
      {
        path: 'yes-answer',
        component: YesAnswerComponent,
      },
    ],
  },
];
