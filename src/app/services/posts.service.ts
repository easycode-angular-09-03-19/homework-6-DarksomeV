import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../interfaces/User";
import {Post} from "../interfaces/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPostsByUserId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${id}`);
  }
}
