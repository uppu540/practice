import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  
  dummyData: any = [];
  newData: any;
  dummyForm: FormGroup;
  
  constructor(private toastr: ToastrService) {
   }

  ngOnInit() {
    this.dummyForm = new FormGroup({
      name: new FormControl(),
      desig: new FormControl(),
      dept: new FormControl(),
      place: new FormControl(),
      date: new FormControl()
     });

     
    this.dummyData = [
      {
        name: 'Tiger Nixon',
        desig: 'System Architect',
        dept: 'Software',
        place: 'Edinburgh',
        date: '2011/04/25'
      },
      {
        name: 'Garrett Winters',
        desig: 'Accountant',
        dept: 'Accounts',
        place: 'Tokyo',
        date: '2011/07/25'
      },
      {
        name: 'Ashton Cox',
        desig: 'Junior Technical Author',
        dept: 'Technical',
        place: 'TokyoSan Francisco',
        date: '2009/01/12'
      },
      {
        name: 'Cedric Kelly',
        desig: 'Senior Javascript Developer',
        dept: 'Information Technology',
        place: 'Edinburgh',
        date: '2012/03/29'
      },
      {
        name: 'Airi Satou',
        desig: 'Integration Specialist',
        dept: 'Security',
        place: 'New York',
        date: '	2012/12/02'
      },
    ]
    console.log(this.dummyData);
    

  }

   

  submitData() {
    this.dummyData.push(this.dummyForm.value);
    console.log(this.dummyData, 'sad');
    this.dummyForm.reset();
    this.toastr.success('Hello world!', 'Toastr fun!');
    $('#addRecord').modal('hide');
  } 


}
