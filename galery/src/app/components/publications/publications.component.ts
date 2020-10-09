import { Component, OnInit } from '@angular/core';

//Interfaces
import { PublicationInterface } from './../../models/publication.Interface';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  public publications:PublicationInterface[] = [
    {title: "Tecnología", imegenPath: "https://assets.entrepreneur.com/content/3x2/2000/20170705191926-tecnologianegociocompetitivo.jpeg", description: "Esto es una descripción"},
    {title: "Tecnología", imegenPath: "https://assets.entrepreneur.com/content/3x2/2000/20170705191926-tecnologianegociocompetitivo.jpeg", description: "Esto es una descripción"},
    {title: "Tecnología", imegenPath: "https://assets.entrepreneur.com/content/3x2/2000/20170705191926-tecnologianegociocompetitivo.jpeg", description: "Esto es una descripción"},
  ];

  constructor() { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(){
    console.log(this.publications);
  }

}
