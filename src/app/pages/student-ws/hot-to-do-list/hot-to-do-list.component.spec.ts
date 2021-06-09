import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToDoListComponent } from './hot-to-do-list.component';

describe('HotToDoListComponent', () => {
  let component: HotToDoListComponent;
  let fixture: ComponentFixture<HotToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
