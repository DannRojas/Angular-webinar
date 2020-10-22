import { PublicationService } from './../../services/publication.service';
import { PublicationInterface } from './../../models/publication.Interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publicacion-form',
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.css']
})
export class PublicacionFormComponent implements OnInit {

  public publication: PublicationInterface = {};

  public isUpdate: boolean = false;

  @ViewChild('publicationForm')
  publicationForm: NgForm;

  constructor(private _activatedRoute: ActivatedRoute, private $publicationService: PublicationService, private _router: Router) { }

  ngOnInit(): void {
    const id: string = this._activatedRoute.snapshot.params['id'];
    if(id === "0"){
      this.isUpdate = false;
      this.publication = Object.assign({});
    }else{
      this.isUpdate = true;
      this.getPublication(id);
    }
  }

  getPublication(id: string){
    this.$publicationService.getPublicationById(id).subscribe(publication => {
      this.publication = Object.assign({}, publication);
    })
  }

  onAddOrUpdate(){
    if(this.publicationForm.valid){
      if(this.isUpdate){
        this.$publicationService.updatePublication(this.publication).subscribe( publication => {
          this._router.navigate(['/publications']);
        })
      }else{
        this.$publicationService.savePublication(this.publication).subscribe( publication => {
          this._router.navigate(['/publications']);
        })
      }
    }
  }

}
