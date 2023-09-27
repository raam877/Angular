import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ['Sleep'];

  addTask(newTask: string) {
      this.tasks.push(newTask);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
