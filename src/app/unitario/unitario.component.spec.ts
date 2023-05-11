import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitarioComponent } from './unitario.component';

describe('UnitarioComponent', () => {
  let component: UnitarioComponent;
  let fixture: ComponentFixture<UnitarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitarioComponent]
    });
    fixture = TestBed.createComponent(UnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
