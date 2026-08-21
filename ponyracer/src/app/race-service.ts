import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceModel } from './models/race-model';

@Service()
export class RaceService {
  private readonly httpClient = inject(HttpClient);

  list(): Observable<Array<RaceModel>> {
    return this.httpClient.get<Array<RaceModel>>('/api/races');
  }
}
