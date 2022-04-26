import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardModeratorComponent } from './new-board-moderator.component';

describe('NewBoardModeratorComponent', () => {
  let component: NewBoardModeratorComponent;
  let fixture: ComponentFixture<NewBoardModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoardModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
