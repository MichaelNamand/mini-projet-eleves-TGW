import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FormStudentComponent} from './components/form-student/form-student.component';

export const AppRoutes: Routes = [
    {path: '', component: HomeComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
