import { PublicationInterface } from './../models/publication.Interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  private api_url: string = "https://cibertel-api.herokuapp.com/api/publications";

  getPublicationById(id: string): Observable<PublicationInterface> {
    const api_url: string = `${this.api_url}/${id}`;
    return this.http.get<PublicationInterface>(api_url);
  }

  getAllPublications(): Observable<PublicationInterface[]>{
    return this.http.get<PublicationInterface[]>(this.api_url)
  }

  savePublication(publication: PublicationInterface): Observable<PublicationInterface>{
    return this.http.post<PublicationInterface>(this.api_url, publication);
  }

  updatePublication(publication: PublicationInterface): Observable<PublicationInterface>{
    const api_url: string = `${this.api_url}/${publication.id}`;
    return this.http.put<PublicationInterface>(api_url, publication).pipe(map(data => data));
  }

  deletePublication(id: string){
    const api_url: string = `${this.api_url}/${id}`;
    return this.http.delete(api_url).pipe(map(data => data));
  }
}
