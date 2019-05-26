import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public FullName : string;
  constructor( private service : EmployeeService,
    private toster : ToastrService ) {
    
   }
               

  ngOnInit() {
    this.resetForm(null);
  }

  resetForm(form : NgForm){
    
    if(form != null)
      form.resetForm();

    this.service.formData = {
      EmployeeId : null,
      FullName : '',
      Postion: '',
      EMPCode : '',
      Mobile : ''
    };

  }

  onSubmit(form : NgForm){

    //console.log("FullName : "+ form.value.FullName);
    //console.log("Postion : "+ form.value.Postion);
    if(form.value.EmployeeId == null ){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
    
    
  }

  insertRecord(form : NgForm){
    
    this.service.postEmployee(form.value).subscribe( res => {
      this.toster.success("Inserted successfully.", "EMP Register");
      this.resetForm(form);
      this.service.refreshList();
    });
   }

   updateRecord(form : NgForm){
    this.service.putEmployee(form.value).subscribe( res => {
      this.toster.warning("Updated successfully.", "EMP Register");
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}