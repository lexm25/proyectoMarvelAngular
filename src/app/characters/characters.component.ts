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
  public personajes:Array<any>;

  constructor(private characterSvc: CharactersApiService, private actRoute: ActivatedRoute, private _router: Router) {
    this.info=this.actRoute.snapshot.params['info'];
    this.personajes=[];
  }
  
  ngOnInit(): void {
    this.characterSvc.getAllCharacters().subscribe(data=>{ return this.personajes=data});

  }

  eliminarPersonaje(index:number){
    this.personajes.splice(this.personajes.findIndex((element)=>element.id==index),1);
  }

}
