import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = "abfdf7bfafee187d0206d5abb15c1e4c";
  HASH = "4c486a3f03e8369470750479775ff1b5";
  //URL_API = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_API = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=abfdf7bfafee187d0206d5abb15c1e4c&hash=4c486a3f03e8369470750479775ff1b5";

  constructor(private http: HttpClient) { }

  getAllCharacters (): Observable<any>{
    return this.http.get<any>(this.URL_API).pipe(map((data: any)=>data.data.results));
  }
}
