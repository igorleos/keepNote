import { Component, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public listaDeNotas: NotesModel[]|undefined;

  constructor(public notesService:NoteListControlService ) {


   }

  ngOnInit(): void {

    this.listaDeNotas =this.notesService.listaDeNotas;
    for (var count=0; count < this.listaDeNotas.length; count++ ){
      if (this.listaDeNotas[count].content=='' && this.listaDeNotas[count].titulo==''){
        this.listaDeNotas.splice(count,1);


        }
    }



  }

}
