import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.load({});
  }

  handleSearch(filters: any) {
    this.load(filters);
  }

  load(filters: any) {
    this.empService.getAll(filters).subscribe(data => {
      console.log('Search result:', data);
      this.employees = data;
    });
  }
}
