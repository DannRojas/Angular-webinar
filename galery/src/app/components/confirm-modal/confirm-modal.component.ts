import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  public message: string = "";

  @Output()
  confirmDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('btnOpenModal')
  btnOpenModal: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(message: string){
    this.message = message;
    this.btnOpenModal.nativeElement.click();
  }

}
