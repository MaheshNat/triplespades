import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io(environment.apiUrl);
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
