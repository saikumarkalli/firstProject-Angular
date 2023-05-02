import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ApiServices
{
constructor(private http : HttpClient){}


GetRequest(url:string){
    return this.http.get<any[]>(url);
}

 PostRequest(url:string,obj:object)
 {
    this.http.post(url,obj)
    .subscribe((res)=>{
      return res;
    });
 }

 PutRequest(url:string,obj:object)
 {
    this.http.put(url,obj)
    .subscribe((res)=>{
      return res;
    });
 }

 DeleteRequest(url:string,obj:object)
 {
    this.http.delete(url,obj)
    .subscribe((res)=>{
      return res;
    });
 }


}