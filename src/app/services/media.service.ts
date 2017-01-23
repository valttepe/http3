import { Observable } from 'rxjs/Observable';
import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MediaService {
  //private serviceUrl: 'http://media.mw.metropolia.fi/wbma/media/'; //Url to API
  constructor(private http: Http) { }
  /*
    getMedia() {
      return this.http.get('http://media.mw.metropolia.fi/wbma/media/')
        .map((resp) => {
          resp.json();
        });
    }
    */

  getMedia() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media/');
  }

  getRoutes(name: string) {
    const url: string ="http://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
    const headers = new Headers({ 'Content-Type': 'application/graphql' });
    const options = new RequestOptions({ headers: headers });
    let data = `{
    stops( name: "${name}") {
      patterns{
        name
      }
    }
  }`;

    return this.http.post(url, data, options).map
    (resp => resp.json());

  }

}

/*Or use : return this.http.get(Url); */


/*
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }*/

