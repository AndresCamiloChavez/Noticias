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
    this.noticiasService.getTopHeadlines().subscribe(data =>{
       console.log('notiicas', data.articles);
       //insertar cada una de las noticias
       this.noticias.push(...data.articles);
    });
  }
}
