import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostwritingComponent } from './ghostwriting.component';

describe('GhostwritingComponent', () => {
  let component: GhostwritingComponent;
  let fixture: ComponentFixture<GhostwritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostwritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
