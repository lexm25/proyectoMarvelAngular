import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './shared/characters-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public id=0;

  constructor(private characterSvc: CharactersApiService, private actRoute: ActivatedRoute, private _router: Router) {
    this.id=this.actRoute.snapshot.params['id'];
   }
  allCharacters: Observable<any>;
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters();
  }

}
