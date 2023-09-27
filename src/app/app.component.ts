// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Hello';
//   inputValue:string = "initial value";
//   todo =['Execise','Breakfast','class','Lunch'];
//   addJob(job : string){
//     this.todo.push(job);
//   }
//   deleteJob(job : string){
//     for (let i = 0; i < this.todo.length; i++)
//     {
//       if(this.todo[i] === job){
//         delete this.todo[i];
//       }
//     }
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "todoApp";
  tasks: string[] = [];

  addTask(newTask: string) {
    if (newTask) {
      this.tasks.push(newTask);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
