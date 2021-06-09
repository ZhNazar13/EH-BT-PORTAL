import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourcesComponent } from './my-cources.component';

describe('MyCourcesComponent', () => {
  let component: MyCourcesComponent;
  let fixture: ComponentFixture<MyCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
