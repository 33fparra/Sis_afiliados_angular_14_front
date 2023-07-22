import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcluidosComponent } from './add-excluidos.component';

describe('AddExcluidosComponent', () => {
  let component: AddExcluidosComponent;
  let fixture: ComponentFixture<AddExcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExcluidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
