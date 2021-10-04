import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  BlogForm: FormGroup;
  constructor(private personneService: PersonneService, private formBuilder: FormBuilder, private router: Router) {
    this.BlogForm = this.formBuilder.group({
      description: ['', Validators.required],
      titre: ['', Validators.required],
      personne: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addBlog() {
    this.personneService.addBlog(this.BlogForm.value).subscribe(res => {
      console.log(res)
      this.router.navigate(["listblog"]);
    })
  }

}
