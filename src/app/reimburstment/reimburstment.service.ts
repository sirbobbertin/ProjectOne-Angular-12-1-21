import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimburstment } from './reimburstment.model';

@Injectable({
  providedIn: 'root'
})
export class ReimburstmentService {

  baseUrl = "http://localhost:4041/api/reimburstments";
  singleUrl = "http://localhost:4041/api/reimburstments/single";
  updateUrl = "http://localhost:4041/api/reimburstments/update";

  constructor(private http: HttpClient) { }

  getAllReimburstmentService(): Observable<Reimburstment[]>{
    return this.http.get<Reimburstment[]>(this.baseUrl);
  }

  getAllUserReimburstmentService(employeeId: number): Observable<Reimburstment[]>{
    return this.http.get<Reimburstment[]>(this.baseUrl+"/"+employeeId);
  }

  addReimburstService(newReimburst: Reimburstment): Observable<Reimburstment>{
    return this.http.post<Reimburstment>(this.baseUrl, newReimburst);
  }

  removeReimburstService(reimburstId: number): Observable<Reimburstment>{
    return this.http.delete<Reimburstment>(this.baseUrl+"/"+reimburstId);
  }

  getAReimburstmentService(reimburstmentId: number): Observable<Reimburstment>{
    return this.http.get<Reimburstment>(this.singleUrl+"/"+reimburstmentId);
  }
  
  updateReimburstmentService(updateReimburst: Reimburstment): Observable<Reimburstment>{
    return this.http.put<Reimburstment>(this.updateUrl+"/"+updateReimburst.id, updateReimburst);
  }
}
