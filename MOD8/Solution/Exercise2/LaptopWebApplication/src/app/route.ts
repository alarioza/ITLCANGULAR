import { Routes } from '@angular/router';
import { LaptopListComponent } from "./laptops/laptoplist.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const appRoutes:Routes=[
    {path:'laptops',component: LaptopListComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
    
]
