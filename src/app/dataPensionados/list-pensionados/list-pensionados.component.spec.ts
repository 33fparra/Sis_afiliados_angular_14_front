import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPensionadosComponent } from './list-pensionados.component';

describe('ListPensionadosComponent', () => {
  let component: ListPensionadosComponent;
  let fixture: ComponentFixture<ListPensionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPensionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPensionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
