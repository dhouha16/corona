import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  blog = {
    "titre": "maladie",
    "personne": "covide",
    "description": "covid est dangreux"
  }
  private personne:Array<Personne>;
  private header:HttpHeaders;
  path = "https://i-o-optimized-deployment-f07363.es.eastus2.azure.elastic-cloud.com:9243";
  constructor(private http: HttpClient) { }

  /**
   * Option http
   */
  private createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ZWxhc3RpYzpuNGNSR3VuUUduSjBDNExoNWZkbUZvSVY='
    });
    return headers;
  }

  /**
   * traitement Erreur
   * @param erreur
   */
  traitementErreur(erreur: HttpErrorResponse) {
    if (erreur.error instanceof ErrorEvent) {
      console.log('Une erreur s est produite', erreur.error.message);
    } else
      console.error("code renvoyé par le backen " + erreur.status +
        + "le corps était : " + JSON.stringify(erreur.error));
    return throwError("quelque chose est arrivé ; Veuillez reessayer plus tard");
  }


  
  addUser(data: any) {
    const options = this.createRequestOptions();
    return this.http.post("epi/user", JSON.stringify(data), { headers: options }).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

 
  loginUser() {
    const options = this.createRequestOptions();
    return this.http.get("epi/user/_search",{ headers: options }).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  getBlogs() {
    const options = this.createRequestOptions();
    return this.http.get("epiblog/blog/_search",{ headers: options }).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }
 
  
  addBlog(data: any) {
    const options = this.createRequestOptions();
    return this.http.post("epiblog/blog", JSON.stringify(data), { headers: options }).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  
}
