import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestrictionService {

  constructor(private http:HttpClient) { }

  getRestrictions() {
    return this.http.get('http://localhost:8080/api/v1/restrictions');
  }
}
