import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error))
  }

  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit() {
    // Will make REST api call and send the form data to the server's REST api and internally REST api will process this request and save the form data into mysql database.
    console.log(this.employee);
    this.saveEmployee();
  }

}
