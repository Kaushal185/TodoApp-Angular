import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
// here @Comonent is ts file of component each component contain 4 files html,css,ts,spec.ts
// in html and css ui code is there
// in ts behevior of code we write
// This is ts file there are variables like
//1) selector - it is name of component => how we use this component in our app
//   ex here <app-todos></app-todos> like that we are using this component
//2) templateUrl is url of html file all html code of component is here ||| or we cant write direct HTML code there also
//3) styleUrls here all cass code of component is there ||| we can also write direct css code here.
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos!:Todo[];
  constructor(){
    this.todos = []
  }
  ngOnInit(): void{

  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  addTodo(todo:Todo){
    console.log("this is main");
    console.log(todo);
    this.todos.push(todo);
  }
}
