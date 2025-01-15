import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  today: string = '';

  ngOnInit() {
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  }
}
