import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  scoreboard: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`${environment.apiUrl}/game`)
      .subscribe((scoreboard: any[]) => {
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
