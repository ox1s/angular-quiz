import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';

@Component({
  selector: 'pr-race',
  templateUrl: './race.html',
  styleUrl: './race.css',
  imports: [Pony]
})
export class Race {
  readonly raceModel = input.required<RaceModel>();
}
