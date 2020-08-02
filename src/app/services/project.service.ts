import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) { }
  

  getAllProject(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/project/all")
  }
}
