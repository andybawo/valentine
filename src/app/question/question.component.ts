import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [RouterLink],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  router = inject(Router);
  noAnswer() {
    this.router.navigateByUrl('/no-answer');
  }
}
