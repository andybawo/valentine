import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesAnswerComponent } from './yes-answer.component';

describe('YesAnswerComponent', () => {
  let component: YesAnswerComponent;
  let fixture: ComponentFixture<YesAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
