import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincesaComponent } from './princesa.component';

describe('PrincesaComponent', () => {
  let component: PrincesaComponent;
  let fixture: ComponentFixture<PrincesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
