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

  protected readonly ponyImageUrl = computed(() => {
    const color = this.ponyModel().color;
    const fileName = `pony-${color.toLowerCase()}`;
    return fileName;
  });

  protected readonly ponyImageAlt = computed(() => {
    const color = this.ponyModel().color;
    return color.toLowerCase();
  });

  readonly ponySelected = output<PonyModel>();
}
