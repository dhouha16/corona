import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  personneForm:FormGroup;
  password:string;
  psubmit:boolean=false;
  constructor(private personneBuilder:FormBuilder,
    private personneService :PersonneService,
    private router:Router) { }

    ngOnInit() {
      this.personneForm = this.personneBuilder.group({   
        'email' :[null,Validators.required],
        'password' :[null,Validators.required]
      });
    }

    login() {
      this.personneService.loginUser().subscribe((res: any) => {
        
        res.hits.hits.forEach((element: any) => {
          if (element._source.email == this.personneForm.get('email').value &&
           element._source.password == this.personneForm.get('password').value) {
            this.router.navigate(["/blog"])
          } 
        });
      });
    }
}
