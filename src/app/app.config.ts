import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class appCongfig{

    GetBaseUrl(){
        return "https://localhost:7281/api";
    }
     
}

