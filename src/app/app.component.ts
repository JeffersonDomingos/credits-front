import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditConsultationComponent } from './pages/credit-consultation/credit-consultation.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [CreditConsultationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'credits-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
