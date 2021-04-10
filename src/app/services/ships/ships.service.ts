import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ship } from 'src/app/shared/models/ship.model';
import { GeneralUtil } from 'src/app/shared/util/general-util';

@Injectable()
export class ShipsService {

  // url = 'https://www.swapi.tech/api/starships/';
  // url = 'https://swapi.dev/api/starships/';
  url = '/api/starships/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept-Encoding, Authorization, X-Requested-With',

  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getShips(): Observable<any> {
    return this.http.get(this.url/*, this.requestOptions*/).pipe(
      map((data: any) => {
        if (GeneralUtil.hasValue(data.next) && data.next !== 'null') {
          // Save the url for the next load
          this.url = data.next.slice(16, data.next.length);
        }
        return data.results.map((ship: Ship) => {
          return new Ship().deserialize(ship);
        });
      })
    );
  }
}
