import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  error:string = "";
  user: FormGroup;
  public formulario = new FormGroup({
    nombre: new FormControl("",Validators.required),
    apellidos: new FormControl("",Validators.required),
    edad: new FormControl("",Validators.required),
    email: new FormControl("",Validators.email)
  });

  constructor() {
    
   }

  ngOnInit(): void {}

  enviar(): void{
    if(!this.formulario.invalid){
      this.error="";
    }
    else{
      this.error = "Datos incorrectos";
    }
  }
}
