import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <form class="d-flex">
  <input #inputSearch 
  autofocus 
  type="search"
  class="form-control me-2" 
  placeholder="Búsqueda" 
  aria-label="Search"
  (keyup)="onSearch(inputSearch.value)";
  >
  <button class="btn bg-secondary" type="submit" style="color: white;">Buscar</button>
</form>`,
  styles: [''],
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    if(value && value.length>3){
      this.router.navigate([''], {
        queryParams:{q:value},
      });
    }
  }

}
