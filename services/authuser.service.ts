import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

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

  createAuth(auth): Observable<any>{
    return this.http.post(this.apiURL+'/auths/', auth, this.httpOptions).pipe(retry(3));
  }

  getAuths(): Observable<any>{
    return this.http.get(this.apiURL+'/auths/').pipe(retry(3));
  }

  getAuth(iduser): Observable<any>{
    return this.http.get(this.apiURL+'/auths/'+iduser).pipe(retry(3));
  }

  updateAuth(iduser, auth): Observable<any>{
    return this.http.put(this.apiURL+'/auths/'+iduser, auth).pipe(retry(3));
  }
}
