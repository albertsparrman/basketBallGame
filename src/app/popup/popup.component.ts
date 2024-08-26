import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() first_name = ''
  @Input() last_name = ''
  @Input() player_image = ''

  @Input() team = ''
  @Input() team_logo = ''
  @Input() team_color = ''
  @Input() team_accent = ''
  @Input() confernce = ''
  @Input() division = ''

  @Input() position = ''
  @Input() height = ''
  @Input() age = ''
  @Input() number = ''

  @Input() showPopup = false
}
