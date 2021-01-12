import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondationsComponent } from './condations.component';

describe('CondationsComponent', () => {
  let component: CondationsComponent;
  let fixture: ComponentFixture<CondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
