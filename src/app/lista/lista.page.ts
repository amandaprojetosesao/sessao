import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  items = []

  loadData(event) {
    setTimeout(() => {
      console.log('Autorizações carregadas');
      this.addItems()
      event.target.complete();
    }, 500)
  }


  constructor() {
    this.addItems()
  }

  ngOnInit() {
  }

  addItems() {
    for (let i = 0; i < 9; i++) {
      this.items.push(i);
    }

  }
}
