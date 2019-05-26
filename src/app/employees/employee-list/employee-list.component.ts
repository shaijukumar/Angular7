import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService,
    private toster : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp : Employee){
    this.service.formData = Object.assign( {}, emp ) ;
  }

  OnDelete(id:number){
    if(confirm("Are you sure to delete this record?")){
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
  
        this.toster.info("Deleted successfully.", "EMP Register");
        //this.resetForm(form);
        //this.service.refreshList();
      });
    }
    
  }
}
