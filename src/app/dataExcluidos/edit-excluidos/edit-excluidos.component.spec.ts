import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExcluidosComponent } from './edit-excluidos.component';

describe('EditExcluidosComponent', () => {
  let component: EditExcluidosComponent;
  let fixture: ComponentFixture<EditExcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExcluidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
