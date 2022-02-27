import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Article } from '../../models/interfaces';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() indice: number;
  // constructor(private iab: InAppBrowser) { }
  constructor(
    private actionSheetController: ActionSheetController,
    private dataLocalService: DataLocalService
  ) {}

  ngOnInit() {}
  abrirNoticia() {
    // console.log(this.noticia.url);
    // const browser = this.iab.create(this.noticia.url, '_system');
  }
  async lanzarMenu() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
            // this.dataLocalService.guardarNoticia(this.noticia);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
