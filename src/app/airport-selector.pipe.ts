import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airportSelector'
})
export class AirportSelectorPipe implements PipeTransform {

  transform(airports: string[], pattern: string) {
    return airports.filter(airport => airport.toUpperCase().includes(pattern.toUpperCase()));
  }

}
