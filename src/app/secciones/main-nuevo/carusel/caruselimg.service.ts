import { Injectable, OnDestroy } from "@angular/core";
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, Subject, timer } from "rxjs";
import { map, retry, share, switchMap, takeUntil } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class CaruselimgService implements OnDestroy {

  // observble para intervalos
  private imgobs$: Observable<any>;

  //creamos un subject para detener el polling
  private pararObs = new Subject();
  
  // cabezales headers
  headersjson = new HttpHeaders().set("Content-Type", "application/json;");
  headerstext = new HttpHeaders().set("Content-Type", "text/html; charset=utf8");
  headersmime = new HttpHeaders().set("Content-Type", "application/octet-stream");

  constructor(private http: HttpClient) {}

  httpGetURL(){
    return this.imgobs$ = timer(10, 2000).pipe(
      switchMap(() =>
        this.http.get('https://source.unsplash.com/random/700x300', {       
          responseType: 'blob'
        }),

      ), 
      retry(),
      share(),
      takeUntil(this.pararObs)
    );
  }

  // metodo numeros randoms
  getRandom() {
    let min = 1, max = 100;
    console.log("funcionara: ");
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
  }
 
  // eliminar obsc
  borrarsubs() {
    this.pararObs.unsubscribe();
  }

  ngOnDestroy() {
    this.pararObs.unsubscribe();
    this.pararObs.next();
    this.pararObs.complete();
  }

  // probar 
}
