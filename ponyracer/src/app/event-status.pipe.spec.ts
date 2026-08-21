import { EventStatusPipe } from './event-status.pipe';

describe('EventStatusPipe', () => {
  let pipe: EventStatusPipe;

  beforeEach(() => {
    pipe = new EventStatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Happening Today" for a date occurring today', () => {
    const today = new Date();
    expect(pipe.transform(today.toISOString())).toBe('Happening Today');
  });

  it('should return "Completed" for a date strictly in the past', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);
    expect(pipe.transform(pastDate.toISOString())).toBe('Completed');
  });

  it('should return formatted "Upcoming on:" string for a future date', () => {
    // Fixed future date for predictable formatting
    const futureDate = new Date('2030-12-25T10:00:00Z');
    const result = pipe.transform(futureDate.toISOString());

    expect(result).toBe('Upcoming on: December 25th, 2030');
  });
});
