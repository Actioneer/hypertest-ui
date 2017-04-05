import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let testcases = [
      {id: 123, name: 'Check if tariff is calculated', description: 'This testcases checks if the tariff is calculated when calling a service', steps: [ {id: 1, action: 'Fill in', value: 'Test'}]},
      {id: 456, name: 'Check if tariff is not calculated', description: 'This testcases checks if the tariff is not calculated when something bad happens', steps: [ {id: 2, action: 'Select', value: 'second value'}, {id: 3, action: 'Check', value: 'yes'}], assertions: [{id: 963, action: 'Check label', value: 'Filled'}]},
      {id: 789, name: 'A testcase', steps: [ {id: 4, action: 'Button', value: 'Submit'}], assertions: [{}]}
    ];

    let projects = [
      {id: 12, name: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...', testcases: [789]},
      {id: 34, name: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...', testcases: [123, 456]},
      {id: 56, name: 'Project 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'},
      {id: 78, name: 'Project 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'},
      {id: 90, name: 'Project 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'},
    ];

    return {testcases, projects};
  }
}
