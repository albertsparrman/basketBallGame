import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-player-guess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-guess.component.html',
  styleUrl: './player-guess.component.scss'
})
export class PlayerGuessComponent {
  @Input() player = ''
  @Input() team = ''
  @Input() conference = ''
  @Input() division = ''
  @Input() position = ''
  @Input() height = ''
  @Input() age = ''
  @Input() number = ''

  @Input() playerCorrect = ''
  @Input() teamCorrect = ''
  @Input() conferenceCorrect = ''
  @Input() divisionCorrect = ''
  @Input() positionCorrect = ''
  @Input() heightCorrect = ''
  @Input() ageCorrect = ''
  @Input() numberCorrect = ''

}
