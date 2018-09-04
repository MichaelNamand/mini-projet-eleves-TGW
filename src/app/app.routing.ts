import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CreateComponent} from './components/create/create.component';

export const AppRoutes: Routes = [
    {path: '', component: HomeComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
