import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilltersComponent } from './fillters.component';

describe('FilltersComponent', () => {
  let component: FilltersComponent;
  let fixture: ComponentFixture<FilltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
