import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmHelpComponent } from './mm-help.component';

describe('MmHelpComponent', () => {
  let component: MmHelpComponent;
  let fixture: ComponentFixture<MmHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
