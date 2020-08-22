import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { ExcelDataModel } from '../models/excel-data-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) { }
  

  getAllProject(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/project/all")
  }

  getAllRecords(name: string): Observable<ExcelDataModel[]> {
    return this.http.get<ExcelDataModel[]>("http://localhost:8080/project?name="+name)
  }

  getResult(body: any): Observable<ExcelDataModel[]>{
    return this.http.post<ExcelDataModel[]>("http://localhost:8080/result", body)
  }
}
