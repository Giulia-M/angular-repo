import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-modifica-post',
  templateUrl: './modifica-post.component.html',
  styleUrls: ['./modifica-post.component.css']
})
export class ModificaPostComponent implements OnInit {
  post: Post;
  postForm: FormGroup;
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
    this.postForm = new FormGroup({
      id: new FormControl({ value: 0, disabled: true }, Validators.required),
      userId: new FormControl(0, Validators.required),
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // recupera id dalla url
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    // recuperare post dal service
    //this.post = this.ps.getPostById(id);

    this.ps.getPostById$(id).subscribe(
      p => {
        this.post = p;
        this.popolaForm(); // popola il form quando i dati sono finalmente arrivati
      },
      errore => console.log("errore!" + errore),
      () => console.log("Caricato post con id " + id)
    );
  }

  popolaForm() {
    // popola il form quando sono arrivati i dati$ dal service
    this.postForm.setValue({
      id: this.post.id,
      userId: this.post.userId,
      title: this.post.title,
      body: this.post.body,
    });
  }

  onSubmit(): void {
    let post = {
      id: this.postForm.controls.id.value,
      userId: this.postForm.controls.userId.value,
      title: this.postForm.controls.title.value,
      body: this.postForm.controls.body.value
    };

    //this.ps.updatePost(post);
    this.ps.updatePost$(post).subscribe(
      risposta => console.log(risposta),
      errore => console.log("errore!" + errore),
      () => console.log("Modificato post " + post.id)
    );

    this.router.navigateByUrl("/posts/" + post.id);
  }
}
