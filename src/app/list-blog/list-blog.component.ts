import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {

  blog: any;
  constructor(private personneService: PersonneService, private router: Router) { }

  ngOnInit(): void {
    this.affichage()
  }

  affichage() {
    this.personneService.getBlogs().subscribe((res: any) => {
      this.blog = res.hits.hits;
      console.log(this.blog);
    })
  }


}
