import { Component, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Pipe({ name: 'filterByInput' })
export class NamePipe implements PipeTransform {
  transform(airports: string[], pattern: string) {
    return airports.filter(airport => airport.includes(pattern));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tayir';
  options : string[] = []
  messages : string[] = []
  departure_airport: string = ""
  arrival_airport: string = ""
  flightForm: FormGroup

  constructor(private http: HttpClient, public formBuilder: FormBuilder) {
    this.flightForm = this.formBuilder.group({
        departure_airport: '',
        arrival_airport: '',
        departure_date: ''
    })
  }

  ngOnInit(): void {
    this.messages.push("Airports fetched");
    this.http.get('assets/airports.dat', {responseType: 'text'}).subscribe(
      data => {
        this.options = data.replace(/\"/g, '').split("\n");
        this.messages.push(this.options.length + " airports fetched");
      }
    )
  }
  searchPlane(): void {
    this.messages.push("TODO: search for a plane");
  }
}
