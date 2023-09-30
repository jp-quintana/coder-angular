import { Component } from '@angular/core';
import { IStudent } from '../models/student.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  students: IStudent[] = [
    { name: 'Juan', date: new Date(), nationality: 'Argentina' },
    { name: 'Ignacio', date: new Date(), nationality: 'USA' },
    { name: 'Pablo', date: new Date(), nationality: 'Spain' },
    { name: 'Franco', date: new Date(), nationality: 'Italy' },
  ];

  setBackgroundColor(i: number) {
    if (i % 2 == 0) {
      return { backgroundColor: '#c23a33' };
    } else {
      return { backgroundColor: '#894c9e' };
    }
  }
}
