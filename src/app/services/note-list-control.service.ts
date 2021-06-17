import { Injectable } from '@angular/core';
import { NotesModel } from '../components/notes-model';

@Injectable({
  providedIn: 'root'
})
export class NoteListControlService {
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
    nota2.flags[1]='notaTeste3';

    this.listaDeNotas.push(nota2);


   }
   public get():NotesModel[]{
    return this.listaDeNotas;
   }
   public send(note:NotesModel):void{
    let curNote=new NotesModel;
    curNote=note;

   }

}
