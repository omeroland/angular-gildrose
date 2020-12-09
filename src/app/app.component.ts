import { Component } from '@angular/core';
import { GildedRose } from './gildrose/gilded-rose';
import { ITEMS } from './gildrose/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gildrose-kata';
  gildrose = new GildedRose(ITEMS);

  updateQuality() {
    this.gildrose.updateQuality();
  }

}
