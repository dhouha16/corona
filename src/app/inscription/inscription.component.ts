import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  personneForm:FormGroup;
  name:string
  email:string
  password:string;
  sexe:string;
  psubmit:boolean=false;

  constructor(private router:Router,private personneBuilder:FormBuilder,private personneService :PersonneService) { 
      this.personneForm = this.personneBuilder.group({
        'name' :['',Validators.required],
        'email' :['', Validators.compose([
          Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
          Validators.required])],
        'password' :['',Validators.required],
        'sexe' :['',Validators.required]
        
      });
    }

  ngOnInit():void  {
   
  }
  addUser() {
    console.log(this.personneForm.get('email').dirty)
    this.personneService.addUser(this.personneForm.value).subscribe(res => {
      this.router.navigate(["login"]);
      console.log(res);
    })
  }

  /**
   * Validation for password and confirm password
   * @param group: FormGroup
   */
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
