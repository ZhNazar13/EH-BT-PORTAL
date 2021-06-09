import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWsComponent } from './student-ws.component';

describe('StudentWsComponent', () => {
  let component: StudentWsComponent;
  let fixture: ComponentFixture<StudentWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
