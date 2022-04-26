import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardUserComponent } from './new-board-user.component';

describe('NewBoardUserComponent', () => {
  let component: NewBoardUserComponent;
  let fixture: ComponentFixture<NewBoardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
