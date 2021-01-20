import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditiComponent } from './editi.component';

describe('EditiComponent', () => {
  let component: EditiComponent;
  let fixture: ComponentFixture<EditiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
