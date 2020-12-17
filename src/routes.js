import ToDoList from './components/ToDoList'
import Task from './components/Task'

export const routes = [
  {
    path: '/home',
    component: ToDoList
  },
  {
    path: '/task',
    component: Task
  },
  {
    path: '',
    redirect: '/home'
  }
];
