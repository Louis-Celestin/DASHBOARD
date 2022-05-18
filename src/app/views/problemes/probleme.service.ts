import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Probleme } from './probleme.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemeService {

  baseURL = "";

  constructor(private httpClient: HttpClient) { }

  getProblemes(): Observable<Probleme[]>{
    this.baseURL ="http://192.168.252.201:8000/api/list-problemeIndex";
    return this.httpClient.get<Probleme[]>(`${this.baseURL}`);
  }
  getProblemeById(id : number): Observable<Probleme>{
    // this.baseURL ="http://192.168.252.201:8000/api/list-problemeShow/{id}";
    return this.httpClient.get<Probleme>('http://192.168.252.201:8000/api/list-problemeShow/'+id);
  }

}
