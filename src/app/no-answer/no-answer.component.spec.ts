import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAnswerComponent } from './no-answer.component';

describe('NoAnswerComponent', () => {
  let component: NoAnswerComponent;
  let fixture: ComponentFixture<NoAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
