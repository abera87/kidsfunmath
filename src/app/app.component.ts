import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckCalculatorComponent } from "./check-calculator/check-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'check-basic-math-kids';
}
