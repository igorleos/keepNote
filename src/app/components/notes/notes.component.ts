import { Component, Input, OnInit } from '@angular/core';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() public notes: NotesModel = new NotesModel();







  constructor() {
  }

  ngOnInit(): void {
    console.log(this.notes.titulo)
  }

}