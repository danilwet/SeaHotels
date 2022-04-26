import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBaseComponent } from './description-base.component';

describe('DescriptionBaseComponent', () => {
  let component: DescriptionBaseComponent;
  let fixture: ComponentFixture<DescriptionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
