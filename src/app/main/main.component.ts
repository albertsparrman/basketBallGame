import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as nbaJSON from '../../assets/nba.json';
import { PlayerGuessComponent } from '../player-guess/player-guess.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PlayerGuessComponent, PopupComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChild('search') search: ElementRef | undefined

  correctPlayerId: number = 1

  playerData: any = {}
  players: Array<any> = []

  guesses: Array<any> = [null, null, null, null, null, null]
  guessNumber: number = 0

  searchPlayersId: Array<any> = []
  showSearchResults: boolean = false

  localJson: any = nbaJSON

  gameOver: boolean = false


  setGameOver() {
    this.gameOver = true
  }

  guessPlayer(playerID: Number) {
    if (this.guessNumber < this.guesses.length) {
      this.guesses[this.guessNumber] = playerID
      this.guessNumber += 1
    }
    if (this.search != undefined) {
      this.search.nativeElement.value = ''
    }
    this.searchForPlayer('')
  }

  searchForPlayer(searchInput: string) {

    this.searchPlayersId = []
    this.showSearchResults = false
    if (searchInput.length > 0) {
      this.showSearchResults = true
      for (var i = 0; i < this.localJson.players.length; i++) {
        const splitFirstName = this.localJson.players[i].first_name.toLowerCase().substring(0, searchInput.length)
        const splitLastName = this.localJson.players[i].last_name.toLowerCase().substring(0, searchInput.length)
        const FullName = this.localJson.players[i].first_name + ' ' + this.localJson.players[i].last_name
        const splitFullName = FullName.toLowerCase().substring(0, searchInput.length)
        if (splitFirstName.match(searchInput) || splitLastName.match(searchInput) || splitFullName.match(searchInput)) {
          this.searchPlayersId.push(i)
        }
      }

    }
  }
}
