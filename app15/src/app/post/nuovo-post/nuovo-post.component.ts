import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-nuovo-post',
  templateUrl: './nuovo-post.component.html',
  styleUrls: ['./nuovo-post.component.css']
})
export class NuovoPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private ps: PostService,
    private router: Router
  ) {
    this.postForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      userId: new FormControl(0, Validators.required),
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let post = {
      id: this.postForm.controls.id.value,
      userId: this.postForm.controls.userId.value,
      title: this.postForm.controls.title.value,
      body: this.postForm.controls.body.value
    };
    //this.ps.addPost(post);

    this.ps.addPost$(post).subscribe(
      risposta => console.log(risposta),
      errore => console.log("errore!" + errore),
      () => console.log("Dati dei post caricati con successo")
    );

    alert("Post inserito correttamente");
    this.router.navigateByUrl("posts");
  }

}
