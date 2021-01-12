import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LektoratComponent } from './lektorat.component';

describe('LektoratComponent', () => {
  let component: LektoratComponent;
  let fixture: ComponentFixture<LektoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LektoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LektoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
