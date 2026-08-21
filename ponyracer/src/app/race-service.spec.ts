import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RaceService } from './race-service';
import { RaceModel } from './models/race-model';

describe('RaceService', () => {
  let raceService: RaceService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    raceService = TestBed.inject(RaceService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding requests after each test
    http.verify();
  });

  it('should return an Observable of races when list() is called', () => {
    const hardcodedRaces: Array<RaceModel> = [
      {
        id: 12,
        name: 'Paris',
        ponies: [
          { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
          { id: 2, name: 'Big Soda', color: 'ORANGE' },
          { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
          { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
          { id: 5, name: 'Fast Rainbow', color: 'BLUE' }
        ],
        startInstant: '2020-02-18T08:02:00Z'
      },
      {
        id: 13,
        name: 'Tokyo',
        ponies: [
          { id: 6, name: 'Fast Rainbow', color: 'BLUE' },
          { id: 7, name: 'Gentle Castle', color: 'GREEN' },
          { id: 8, name: 'Awesome Rock', color: 'PURPLE' },
          { id: 9, name: 'Little Rainbow', color: 'YELLOW' },
          { id: 10, name: 'Great Soda', color: 'ORANGE' }
        ],
        startInstant: '2020-02-18T08:03:00Z'
      }
    ];

    let actualRaces: Array<RaceModel> | undefined;

    // Call the service
    raceService.list().subscribe(races => {
      actualRaces = races;
    });

    // Check that the underlying HTTP request was correct
    const request = http.expectOne('/api/races');
    expect(request.request.method).toBe('GET');

    // Return the fake response
    request.flush(hardcodedRaces);

    // Check that the returned array is deserialized as expected
    expect(actualRaces?.length).toBe(2);
    expect(actualRaces?.[0].name).toBe('Paris');
  });
});
