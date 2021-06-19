import { Injectable } from '@angular/core';
import { NotesModel } from '../components/notes-model';

@Injectable({
  providedIn: 'root'
})
export class NoteListControlService {
  public listaDeNotas: NotesModel[]=[];
  public curNote: NotesModel|undefined;
  public index: number|undefined;


  constructor() {
    let nota1: NotesModel= new NotesModel;


    nota1.titulo='Lorem';
    nota1.content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim quis nulla mattis hendrerit eget eget lacus. Vivamus ac faucibus erat, vel ultricies mi. Donec eu dictum neque. Sed pretium orci sem, et porta urna lobortis efficitur. Mauris bibendum massa augue, ut dignissim enim egestas vel. '
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
    this.curNote=new NotesModel;
    this.curNote=note;

   }
   public sendIndex(index:number|undefined):void{
    this.index=index;

   }
   public getNote():NotesModel|undefined{
     return this.curNote;
   }
   public getIndex():number|undefined{
    return this.index;
  }


}
