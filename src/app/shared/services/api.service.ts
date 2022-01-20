import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.APIEndpoint;
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + path);
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + path, body);
  }

  // TODO use interceptor instead of injecting authorization like this
  postAuthenticated<T>(path: string, body: string[], authHeader: string): Observable<T> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  authHeader)
    }
    return this.httpClient.post<T>(this.endpoint + path, body, header);
  }

  // TODO use interceptor instead of injecting authorization like this
  getAuthenticated<T>(path: string, authHeader: string): Observable<T> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  authHeader)
    }
    return this.httpClient.get<T>(this.endpoint + path, header);
  }

  put<T>(path: string, body: any): Observable<T>  {
    return this.httpClient.put<T>(this.endpoint + path, body);
  }

  delete<T>(path: string): Observable<T>  {
    return this.httpClient.delete<T>(this.endpoint + path);
  }
}
