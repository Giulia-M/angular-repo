import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { elencoPost } from "../data/elencoPost";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "https://jsonplaceholder.typicode.com";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    })
  };

  constructor(private http: HttpClient) { }

  getAllPosts(): Post[] {
    // recupera elenco dei post
    return elencoPost;
  }

  getAllPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL + '/posts');
  }

  getPostById(id: number): any {
    // recupera un post con quel id
    return elencoPost.find(
      post => post.id == id
    );
  }

  getPostById$(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiURL + '/posts/' + id).pipe(
      tap(
        post => console.log(post)
      )
    );
  }

  addPost(post: Post): void {
    // invia un post da salvare
    elencoPost.push(post);
  }

  addPost$(post: Post): Observable<Post> {
    // invia un post da salvare
    return this.http.post<Post>(this.apiURL + '/posts', JSON.stringify(post), this.httpOptions);
  }

  updatePost(post: Post): void {
    // invia un post da sovrascrivere
    let i = elencoPost.findIndex(
      p => p.id == post.id
    );

    if (i >= 0) {
      elencoPost[i] = post;
    }
  }

  updatePost$(post: Post): Observable<Post> {
    // invia un post da sovrascrivere
    return this.http.put<Post>(this.apiURL + '/posts/' + post.id, JSON.stringify(post), this.httpOptions);
  }

  deletePostById(id: number): void {
    // elimina un post con quel id
    let i = elencoPost.findIndex(
      p => p.id == id
    );

    if (i >= 0) {
      elencoPost.splice(i, 1);
    }
  }

  deletePostById$(id: number): Observable<Post> {
    // elimina un post con quel id
    return this.http.delete<Post>(this.apiURL + '/posts/' + id);
  }

}