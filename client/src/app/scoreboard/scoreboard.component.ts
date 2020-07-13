import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  users = ['Mahesh', 'Shubra', 'Jaydip'];
  scoreboard: any;
  readonly apiUrl = 'https://triple-spades.herokuapp.com';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${this.apiUrl}/game`).subscribe((scoreboard: any[]) => {
      this.scoreboard = scoreboard.map((score) => {
        score['start_time'] = `${new Date(
          score['start_time']
        ).toLocaleDateString()} at ${new Date(
          score['start_time']
        ).toLocaleTimeString()}`;
        score['end_time'] = `${new Date(
          score['end_time']
        ).toLocaleDateString()} at ${new Date(
          score['end_time']
        ).toLocaleTimeString()}`;
        return score;
      });
    });
  }
}
