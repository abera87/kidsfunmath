import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this line
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-calculator.component.html',
  styleUrl: './check-calculator.component.css'
})
export class CheckCalculatorComponent {
  number1!: number;
  number2!: number;
  result!: number;
  number3!: number;
  number4!: number;
  result1!: number;
  outcome!: string;
  isCorrect: boolean = false;
  operation: string="+";
  audioLocation!: string;
  /**
   *
   */
  constructor() {
    this.Reset();
  }
  Reset() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
    this.number3 = 0;
    this.number4 = 0;
    this.result1 = 0;
    this.outcome = "";

  }
  Clear() {
    this.Reset();
  }

  Check(audio: HTMLAudioElement) {
    if (this.operation == "+")
      this.isCorrect = this.result == this.number1 + this.number2;
    if (this.operation == "x")
      this.isCorrect = this.result1 == this.number3 * this.number4;
    if (this.isCorrect) {
      this.outcome = "Correct";
      this.audioLocation = "assets/correct-83487.mp3";
    }
    else {
      this.outcome = "Incorrect";
      this.audioLocation = "assets/buzzer-or-wrong-answer-20582.mp3";
    }
    audio.src = this.audioLocation;
    audio.play();
  }
}
