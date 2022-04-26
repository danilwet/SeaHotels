import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardAdminComponent } from './new-board-admin.component';

describe('NewBoardAdminComponent', () => {
  let component: NewBoardAdminComponent;
  let fixture: ComponentFixture<NewBoardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
