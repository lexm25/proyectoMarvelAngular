import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './servicio/characters-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public info="";
  allCharacters: Observable<any>;

  constructor(private characterSvc: CharactersApiService, private actRoute: ActivatedRoute, private _router: Router) {
    this.info=this.actRoute.snapshot.params['info'];
  }
  
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters();
    //console.log(this.allCharacters);
  }

  /*eliminarPersonaje(index:number){
    delete this.allCharacters[index];
  }*/

}
