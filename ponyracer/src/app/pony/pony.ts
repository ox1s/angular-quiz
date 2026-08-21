import { Component, computed, input, output } from '@angular/core';
import { PonyModel } from '../models/pony-model';

@Component({
  selector: 'pr-pony',
  imports: [],
  templateUrl: './pony.html',
  styleUrl: './pony.css'
})
export class Pony {
  readonly ponyModel = input.required<PonyModel>();

  readonly ponyImageUrl = computed(() => {
    const color = this.ponyModel().color;
    const fileName = `images/pony-${color.toLowerCase()}.gif`;
    return fileName;
  });
  readonly ponySelected = output<PonyModel>();

  protected isPonySelected() {
    this.ponySelected.emit(this.ponyModel());
  }
}
