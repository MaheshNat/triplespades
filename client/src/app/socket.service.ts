import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  readonly URI = 'http://127.0.0.1:5000/';

  constructor() {
    this.socket = io(this.URI);
  }

  listen(event: string) {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        console.log(`event ${event} listened with data ${data}`);
        subscriber.next(data);
      });
    });
  }

  emit(event: string, data: any) {
    console.log(`event ${event} emitted with data ${data}`);
    return this.socket.emit(event, data);
  }
}
