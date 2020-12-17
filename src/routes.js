import ToDoList from './components/ToDoList'

export const routes = [
  {
    path: '/home',
    component: ToDoList
  },
  {
    path: '',
    redirect: '/home'
  }
];
