import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`
    https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=6a16267384034297b4dadccdbd539666`);
  }

}
