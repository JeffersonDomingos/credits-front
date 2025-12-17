import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConsultationComponent } from './credit-consultation.component';

describe('CreditConsultationComponent', () => {
  let component: CreditConsultationComponent;
  let fixture: ComponentFixture<CreditConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
