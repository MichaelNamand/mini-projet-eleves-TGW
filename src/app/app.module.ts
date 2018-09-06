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
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_DATE_LOCALE, MatSnackBarModule, MatDialogModule, MatSelectModule
} from '@angular/material';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import {ROUTING} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModifyDialogComponent } from './components/modify-dialog/modify-dialog.component';
import {StudentService} from './components/students-table/student.service';
import { StatisticsComponent } from './components/stats/statistics/statistics.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { StatisticAgeComponent } from './components/stats/statistic-age/statistic-age.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentsTableComponent,
        NavigationComponent,
        HomeComponent,
        FormStudentComponent,
        ModifyDialogComponent,
        StatisticsComponent,
        StatisticAgeComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        ReactiveFormsModule,
        BrowserModule, ROUTING,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        LayoutModule,
        NgxChartsModule,
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
        MatDialogModule,
        MatSortModule,
        MatSnackBarModule,
        MatNativeDateModule,
        FormsModule
    ],
    entryComponents: [ModifyDialogComponent],
    providers: [
        ApiService,
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
        StudentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
