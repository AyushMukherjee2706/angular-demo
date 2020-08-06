import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  upload(file: File){
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/upload', formData);

    return this.http.request(req);
  }

  getAllFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/all');
  }

  sendData(data: any){
    console.log("sending data")
    this.http.post('http://localhost:8080/data', data).subscribe(      
      err=>{
        console.error(err)
      }
    );
  }

  test(){
    console.log("sending test")
    this.http.get('http://localhost:8080/test').subscribe(
      res =>{
        console.log(res)
      }
    );
    
  }
}
