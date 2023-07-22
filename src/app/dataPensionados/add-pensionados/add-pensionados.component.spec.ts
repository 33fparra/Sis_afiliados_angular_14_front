import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPensionadosComponent } from './add-pensionados.component';

describe('AddPensionadosComponent', () => {
  let component: AddPensionadosComponent;
  let fixture: ComponentFixture<AddPensionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPensionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPensionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
