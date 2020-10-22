import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';
import { PublicationService } from './../../services/publication.service';
import { Component, OnInit, ViewChild } from '@angular/core';

//Interfaces
import { PublicationInterface } from './../../models/publication.Interface';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  public publications:PublicationInterface[] = [];
  public selectedPublication:PublicationInterface = {};
  public filterPublications: string = "";

  @ViewChild(ConfirmModalComponent)
  confirmModalComponent: ConfirmModalComponent;

  constructor(private $publicationService: PublicationService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(){
    this.$publicationService.getAllPublications().subscribe( publications => {
      this.publications = publications;
      console.log(this.publications);
    })
  }

  onPreDelete(publication: PublicationInterface){
    let message:string = `¿Está seguro de que desea eliminar la publicación ${publication.title}?`
    this.selectedPublication = Object.assign({}, publication);
    this.confirmModalComponent.onOpenModal(message);
  }

  onDelete(confirmDelete: boolean){
    if(confirmDelete){
      this.$publicationService.deletePublication(this.selectedPublication.id).subscribe(data => {
        this.getPublications();
      })
    }
  }

}
