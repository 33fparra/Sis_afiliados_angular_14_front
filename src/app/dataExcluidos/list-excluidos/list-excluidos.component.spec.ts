import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExcluidosComponent } from './list-excluidos.component';

describe('ListExcluidosComponent', () => {
  let component: ListExcluidosComponent;
  let fixture: ComponentFixture<ListExcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExcluidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
