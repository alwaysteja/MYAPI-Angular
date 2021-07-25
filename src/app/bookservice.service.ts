import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
private baseUrl="http://localhost:8090/books";


constructor(private httpclient:HttpClient){
}
getBooksList():Observable<Book[]>{
 return this.httpclient.get<Book[]>(this.baseUrl);
}
}
