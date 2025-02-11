import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-answer',
  imports: [RouterLink, CommonModule],
  templateUrl: './no-answer.component.html',
  styleUrl: './no-answer.component.css',
})
export class NoAnswerComponent {
  positiveWidth = 200;
  positiveHeight = 80;
  negativeWidth = 200;
  negativeHeight = 80;
  noBigger() {
    if (this.negativeHeight > 10 && this.negativeWidth > 90) {
      this.negativeHeight -= 5;
      this.negativeWidth -= 10;
      this.positiveHeight += 15;
      this.positiveWidth += 15;
    }
  }
}
