import { Routes } from "@angular/router";
import { BlogComponent } from "src/app/blog/blog.component";
import { InscriptionComponent } from "src/app/inscription/inscription.component";
import { ListBlogComponent } from "src/app/list-blog/list-blog.component";
import { LoginComponent } from "src/app/login/login.component";

export const routes:Routes=[
{path:'inscription',component:InscriptionComponent},
{path:'blog',component:BlogComponent},
{path:'listblog',component:ListBlogComponent},
{path:'login',component:LoginComponent},
{path:"",redirectTo:"/listblog" ,pathMatch:'full'}]