import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pr-race',
  templateUrl: './race.html',
  styleUrl: './race.css',
  imports: [Pony, DatePipe]
})
export class Race {
  readonly raceModel = input.required<RaceModel>();
}
