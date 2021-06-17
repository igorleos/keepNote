import { Component, OnInit } from '@angular/core';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public listaDeNotas: NotesModel[]=[];

  constructor() {
    let nota1: NotesModel= new NotesModel;

    nota1.titulo='Nota 01';
    nota1.content='Eu quero testar essa nota q é impar nota 01'
    nota1.flags[0]='notaTeste1';

    this.listaDeNotas.push(nota1);

    let nota2: NotesModel= new NotesModel;

    nota2.titulo='Nota 02';
    nota2.content='Eu quero testar essa nota q é par nota 02'
    nota2.flags[0]='notaTeste2';

    this.listaDeNotas.push(nota2);


   }

  ngOnInit(): void {
  }

}
