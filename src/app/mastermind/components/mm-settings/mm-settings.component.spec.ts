import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmSettingsComponent } from './mm-settings.component';

describe('MmSettingsComponent', () => {
  let component: MmSettingsComponent;
  let fixture: ComponentFixture<MmSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
