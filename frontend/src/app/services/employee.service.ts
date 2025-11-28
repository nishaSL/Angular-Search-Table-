import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getAll(filters?: any): Observable<Employee[]> {
  let params = new HttpParams();

  if (filters) {
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value && value.trim() !== '') {
        // use partial matching
        params = params.set(key + '_like', value.trim());
      }
    });
  }

  return this.http.get<Employee[]>(this.baseUrl, { params });
}

}
