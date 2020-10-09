import { PublicationInterface } from './../../models/publication.Interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion-form',
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.css']
})
export class PublicacionFormComponent implements OnInit {

  public publication: PublicationInterface = {};

  constructor() { }

  ngOnInit(): void {
  }

  onAddOrUpdate(){
    console.log(this.publication);
  }

}
