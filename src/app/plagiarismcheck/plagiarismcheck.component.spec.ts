import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiarismcheckComponent } from './plagiarismcheck.component';

describe('PlagiarismcheckComponent', () => {
  let component: PlagiarismcheckComponent;
  let fixture: ComponentFixture<PlagiarismcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagiarismcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagiarismcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
