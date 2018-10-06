import { Routes } from '@angular/router';
import { LaptopListComponent } from './laptops/laptoplist.component';
import { HomePage } from './home/home.component';
import { AboutPage } from './about/about.component';
export const appRoutes:Routes=[
    {path:'laptops',component:LaptopListComponent},
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'',redirectTo:'/home',pathMatch:'full'}
]