import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmBoardComponent } from './mm-board.component';

describe('MmBoardComponent', () => {
  let component: MmBoardComponent;
  let fixture: ComponentFixture<MmBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
