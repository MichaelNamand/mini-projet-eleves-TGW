import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, DateAdapter, MatNativeDateModule
} from '@angular/material';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './components/create/create.component';
import {ROUTING} from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        StudentsTableComponent,
        NavigationComponent,
        HomeComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        BrowserModule, ROUTING,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatNativeDateModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
