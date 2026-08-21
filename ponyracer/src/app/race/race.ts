import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';
import { DatePipe } from '@angular/common';
import { EventStatusPipe } from '../event-status.pipe';

@Component({
  selector: 'pr-race',
  templateUrl: './race.html',
  styleUrl: './race.css',
  imports: [Pony, DatePipe, EventStatusPipe]
})
export class Race {
  readonly raceModel = input.required<RaceModel>();
}
