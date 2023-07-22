import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensionadosComponent } from './edit-pensionados.component';

describe('EditPensionadosComponent', () => {
  let component: EditPensionadosComponent;
  let fixture: ComponentFixture<EditPensionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPensionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPensionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
