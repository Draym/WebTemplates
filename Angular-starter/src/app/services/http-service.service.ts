import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint

  GET(uri, callback, params, headers) {
    this.http
      .get(uri, { headers, params })
      .subscribe(
        val => {
          console.log("GET call successful value returned in body", val);
          if (callback)
            callback(val);
        },
        response => {
          console.log("GET call in error", response);
        },
        () => {
          console.log("The GET observable is now completed.");
        }
      );
  }

  DELETE(uri, callback, params, headers) {
    this.http.delete(uri, { params, headers })
      .subscribe(
        (val) => {
          console.log("DELETE call successful value returned in body", val);
          if (callback)
            callback(val);
        },
        response => {
          console.log("DELETE call in error", response);
        },
        () => {
          console.log("The DELETE observable is now completed.");
        }
      );
  }

  POST(uri, data, callback, params, headers) {
    this.http
      .post(uri, data, { params, headers })
      .subscribe(
        val => {
          console.log("POST call successful value returned in body", val);
          if (callback)
            callback(val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }

  PUT(uri, data, callback, params, headers) {
    this.http
      .put(uri, data, { params, headers })
      .subscribe(
        val => {
          console.log("PUT call successful value returned in body", val);
          if (callback)
            callback(val);
        },
        response => {
          console.log("PUT call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }
}
