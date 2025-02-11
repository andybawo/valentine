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
  positiveWidth = 120;
  positiveHeight = 40;
  negativeWidth = 120;
  negativeHeight = 40;
  negativeFont = 20;
  noBigger() {
    if (
      this.negativeHeight > 10 &&
      this.negativeWidth > 20 &&
      this.negativeFont > 4
    ) {
      this.negativeFont -= 2;
      this.negativeHeight -= 5;
      this.negativeWidth -= 10;
      this.positiveHeight += 25;
      this.positiveWidth += 15;
    }
  }
}
