import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditConsultationComponent } from './app/credit-consultation/credit-consultation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreditConsultationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'credits-front';
}
