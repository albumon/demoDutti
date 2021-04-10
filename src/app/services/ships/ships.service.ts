import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ship } from 'src/app/shared/models/ship.model';

@Injectable()
export class ShipsService {

  url = 'https://swapi.dev/api/starships/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getShips(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        return data.results.map((ship: Ship) => {
          return new Ship().deserialize(ship);
        });
      })
    );
  }
}
