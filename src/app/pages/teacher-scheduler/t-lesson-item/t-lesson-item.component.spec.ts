import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLessonItemComponent } from './t-lesson-item.component';

describe('TLessonItemComponent', () => {
  let component: TLessonItemComponent;
  let fixture: ComponentFixture<TLessonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLessonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TLessonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
