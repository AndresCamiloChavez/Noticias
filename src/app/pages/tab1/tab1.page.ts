import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../models/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(): void {
   this.cargarNoticias();
  }
  loadData(event){
    console.log(event);
    this.cargarNoticias(event);
  }
  cargarNoticias(event?){
    this.noticiasService.getTopHeadlines().subscribe(data =>{
      console.log('noticias', data.articles);
      this.noticias.push(...data.articles);
   });
   if(event){
     event.target.complete();
   }
  }
}
