import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrls: ['./dettaglio-post.component.css']
})
export class DettaglioPostComponent implements OnInit {
  post: Post;

  constructor(
    private ps: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.post = {
      "userId": 0,
      "id": 0,
      "title": '',
      "body": ''
    };
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    // this.post = this.ps.getPostById(id);
    this.ps.getPostById$(id).subscribe(
      p => this.post = p,
      errore => console.log("errore!" + errore),
      () => console.log("Caricato post con id " + id)
    );
  }

  elimina(): void {
    if (confirm("Sei sicuro di eliminare il post " + this.post.id + "?")) {
      // this.ps.deletePostById(this.post.id);
      this.ps.deletePostById$(this.post.id).subscribe(
        risposta => console.log(risposta),
        errore => console.log("errore!" + errore),
        () => console.log("Eliminato post con id " + this.post.id)
      );
      this.router.navigateByUrl("/posts")
    }

  }

}
