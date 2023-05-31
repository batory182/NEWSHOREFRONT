import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders, HttpResponse } from "@angular/common/http"
import { UrlApis } from "../enums/api.ur";
import { Observable, catchError, of } from "rxjs";
@Injectable({
    providedIn: 'root'
})


export class ApiService {

    private httpOptions: {
        headers: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response',
    }

    constructor(
        private httpClient: HttpClient
    ) {
        this.httpOptions = {
            observe: 'response',
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json'
                }
            )
        }
    }
    getByRouteParams<Entity>(params: any[], baseUrl: string, urlApi: UrlApis): Observable<HttpResponse<Entity>> {
        let url: string = `${baseUrl}${urlApi}`;
        params.map(p => url = `${url}${p}/`);
        return this.httpClient.get<Entity>(url.slice(0, -1), this.httpOptions);
    }
}