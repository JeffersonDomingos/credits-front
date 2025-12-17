import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditConsultationComponent } from './credit-consultation/credit-consultation.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreditConsultationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'credits-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
