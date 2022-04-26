import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonDesсComponent } from './bubble-sort-desc.component';

describe('BubbleSortDescComponent', () => {
  let component: BetonDesсComponent;
  let fixture: ComponentFixture<BetonDesсComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetonDesсComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetonDesсComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
