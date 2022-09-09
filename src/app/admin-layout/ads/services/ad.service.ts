import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http:HttpClient) { 

  }

  getIlans(){
    return this.http.get<any>(environment.ad);
  }

  removeAd(id:number){
    return this.http.delete<any>(environment.ad +"/"+id);
  }

  createAd(data:Object){
    return this.http.post<any>(environment.ad,data);
  }
  updateAd(data:Object,id:number){
    return this.http.put<any>(environment.ad +"/"+id,data);
  }
}
