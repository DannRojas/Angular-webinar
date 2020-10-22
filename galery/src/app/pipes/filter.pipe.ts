import { PublicationInterface } from './../models/publication.Interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(publications: PublicationInterface[], args: string): PublicationInterface[] {
    const resPublications= [];
    if(publications){
      for(const publication of publications){
        if(publication.title.toLocaleLowerCase().indexOf(args.toLocaleLowerCase())>-1){
          resPublications.push(publication);
        }
      }
      return resPublications;
    }
  }

}
