import { Component } from '@angular/core';
import { Service, Employee, Task } from './components/service.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MintUIProjectAngular';
 employees: Employee[];
 selectAllModeVlaue: string;
 selectionModeValue: string;
 tasks: DataSource;
 constructor(service: Service) {
 this.employees = service.getEmployees();

       this.selectAllModeVlaue = 'page';

       this.selectionModeValue = 'single';

       this.tasks = new DataSource({
        store: new ArrayStore({
            key: 'ClientID',
            data: service.getTasks()
        })
    });


  }
  toggleChild() {
    alert('aaaa');

    }
  PreviewMadates(row) {
    alert('Preview Mandates' +  row );
  }


  MadatesEdit(row) {
    alert('Mandates Edit' +  row );
  }

}

