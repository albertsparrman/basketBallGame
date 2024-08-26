import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  currentGamemode: string = 'ALL-STARS'
  newGamemode: string = 'ALL-STARS'
  changingGamemode: boolean = false

  @ViewChild('dropdown') dropdown: ElementRef | undefined

  changeGamemode(selectedGamemode: string) {
    this.newGamemode = selectedGamemode
    
    if (this.newGamemode != this.currentGamemode) {
      this.changingGamemode = true

      window.setTimeout(() => {
        this.delayCurrentGamemode()
      }, 2000)
    }
    if (this.dropdown != undefined) {
      this.dropdown.nativeElement.checked = false
    }
  }

  delayCurrentGamemode() {
    this.currentGamemode = this.newGamemode
    this.changingGamemode = false
  }

}
