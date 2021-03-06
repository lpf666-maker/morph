import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PresentationPageComponent} from './pages/presentation-page/presentation-page.component'
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'presentation',
        component: PresentationPageComponent
    }
];
