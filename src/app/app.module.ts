import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SpTestComponent } from './sp-test/sp-test.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,    
    EmployeeComponent,
    EmployeeListComponent,
    UploadImageComponent,
    SpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
