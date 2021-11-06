import { Injectable, SystemJsNgModuleLoaderConfig } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClase } from '../interfaces/iclase';

@Injectable({
  providedIn: 'root'
})
export class ApiclasesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // apiURL = 'http://localhost:3000';
  apiURL = 'http://192.168.43.253:3000';
  // apiURL = '0.0.0.0:3000';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
  }

  getPost(id): Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(retry(3));
  }

  updatePost(id, post): Observable<any>{
    return this.http.put(this.apiURL+'posts/'+id, post, this.httpOptions).pipe(retry(3));
  }

  deletePost(id): Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id. this.httpOptions);
  }

  createPost(post): Observable<any>{
    return this.http.post(this.apiURL+'/posts/',post, this.httpOptions).pipe(retry(3));
  }

  getClase(idClase): Observable<any>{
    return this.http.get(this.apiURL+'/clases/'+idClase).pipe(retry(3));
  }

  getClases(): Observable<any>{
    return this.http.get(this.apiURL+'/clases/').pipe(retry(3));
  }

  updateClase(idClase, clase): Observable<any>{
    return this.http.put(this.apiURL+'/clases/'+idClase, clase).pipe(retry(3));
  }
}
