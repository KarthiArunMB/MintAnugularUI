import { Injectable } from '@angular/core';
@Injectable()
export class Service {
    getEmployees(): Employee[] {
        return employees;
    }

    getTasks(): Task[] {
      return tasks;
  }
}
export class Employee {
  ClientID: string;
  ClientName: string;
  JobTitle: string;
  RequestedClosureDate: string;
  RequestedResourcesNumber: string;
  WorkLocation: string;
  DelegationDate: string;
  DelegatedBy: string;
  Status: string;
  Icons: boolean;
}

const employees: Employee[] = [{
  'ClientID': '1',
  'JobTitle': 'Sales Manager',
  'ClientName': 'Ao Smith',
  'WorkLocation': 'Chennai',
  'Status': '10 days',
  'RequestedClosureDate': '2016-04-06T23:59:30',
  'RequestedResourcesNumber': '1',
  'DelegationDate': '1964/03/16',
  'DelegatedBy': '1995/01/15',
  'Icons' : true,
}, {
  'ClientID': '2',
  'JobTitle': 'Junior Engineer',
  'ClientName': 'JLL BDc6',
  'WorkLocation': 'Salem',
  'Status': '5 days',
  'RequestedClosureDate': '2016-04-06T23:59:30',
  'RequestedResourcesNumber': '2',
  'DelegationDate': '1964/03/16',
  'DelegatedBy': '1995/01/15',
  'Icons' : true,
}, {
  'ClientID': '3',
  'JobTitle': 'MIS Excutive',
  'ClientName': 'Metro Case And Carry',
  'WorkLocation': 'Trichy',
  'Status': '5 days',
  'RequestedClosureDate': '2016-04-06T23:59:30',
  'RequestedResourcesNumber': '3',
  'DelegationDate': '1964/03/16',
  'DelegatedBy': '1995/01/15',
  'Icons' : true,
}, {
  'ClientID': '4',
  'JobTitle': 'CSR',
  'ClientName': 'Jeeves',
  'WorkLocation': 'Bengalore',
  'Status': '6 days',
  'RequestedClosureDate': '2016-04-06T23:59:30',
  'RequestedResourcesNumber': '4',
  'DelegationDate': '1964/03/16',
  'DelegatedBy': '1995/01/15',
  'Icons' : true,
}, {
  'ClientID': '5',
  'JobTitle': 'Help Desk Excetive',
  'ClientName': 'JLL HCL',
  'WorkLocation': 'Hyderabad',
  'Status': '3 days',
  'RequestedClosureDate': '2016-04-06T23:59:30',
  'RequestedResourcesNumber': '5',
  'DelegationDate': '1964/03/16',
  'DelegatedBy': '1995/01/15',
  'Icons' : true,
}];

export class ServiceService {

  constructor() { }
}


export class Task {
    id: number;
    text: string;
}

const tasks: Task[] = [{ id: 1, text: 'Prepare 2016 Financial'},
{ id: 2, text: 'Prepare 2016 Marketing Plan'},
{ id: 3, text: 'Update Personnel Files'},
{ id: 4, text: 'Review Health Insurance Options Under the Affordable Care Act'},
{ id: 5, text: 'New Brochures'},
{ id: 6, text: '2016 Brochure Designs'},
{ id: 7, text: 'Brochure Design Review'},
{ id: 8, text: 'Website Re-Design Plan'},
{ id: 9, text: 'Rollout of New Website and Marketing Brochures'},
{ id: 10, text: 'Create 2012 Sales Report'},
{ id: 11, text: 'Direct vs Online Sales Comparison Report'},
{ id: 12, text: 'Review 2012 Sales Report and Approve 2016 Plans'},
{ id: 13, text: 'Submit Signed NDA'},
{ id: 14, text: 'Update Revenue Projections'},
{ id: 15, text: 'Review Revenue Projections'},
{ id: 16, text: 'Comment on Revenue Projections'},
{ id: 17, text: 'Scan Health Insurance Forms'},
{ id: 18, text: 'Sign Health Insurance Forms'},
{ id: 19, text: 'Follow up with West Coast Stores'},
{ id: 20, text: 'Follow up with East Coast Stores'},
{ id: 21, text: 'Submit Refund Report for 2016 Recall'},
{ id: 22, text: 'Give Final Approval for Refunds'},
{ id: 23, text: 'Prepare Product Recall Report'},
{ id: 24, text: 'Review Product Recall Report by Engineering Team'},
{ id: 25, text: 'Review Training Course for any Ommissions'},
{ id: 26, text: 'Review Overtime Report'},
{ id: 27, text: 'Submit Overtime Request Forms'},
{ id: 28, text: 'Overtime Approval Guidelines'},
{ id: 29, text: 'Create Report on Customer Feedback'},
{ id: 30, text: 'Review Customer Feedback Report'},
{ id: 31, text: 'Customer Feedback Report Analysis'},
{ id: 32, text: 'Prepare Shipping Cost Analysis Report'},
{ id: 33, text: 'Complete Shipper Selection Form'},
{ id: 34, text: 'Upgrade Server Hardware'},
{ id: 35, text: 'Upgrade Personal Computers'},
{ id: 36, text: 'Approve Personal Computer Upgrade Plan'},
{ id: 37, text: 'Estimate Time Required to Touch-Enable Apps'},
{ id: 38, text: 'Report on Tranistion to Touch-Based Apps'},
{ id: 39, text: 'Try New Touch-Enabled WinForms Apps'},
{ id: 40, text: 'Site Up-Time Report'},
{ id: 41, text: 'Review Site Up-Time Report'},
{ id: 42, text: 'Review Online Sales Report'},
{ id: 43, text: 'Determine New Online Marketing Strategy'},
{ id: 44, text: 'Submit New Website Design'},
{ id: 45, text: 'Create Icons for Website'},
{ id: 46, text: 'Review PSDs for New Website'},
{ id: 47, text: 'Create New Shopping Cart'},
{ id: 48, text: 'Launch New Website'},
{ id: 49, text: 'Update Customer Shipping Profiles'},
{ id: 50, text: 'Create New Shipping Return Labels'}];
