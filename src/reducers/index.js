import { ADD_TASK, DELETE_TASK } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const task = (action) => {
  let { text } = action;  
  return {
    id: Math.random(),
    text    
  }  
}

const removeById = (state = [], id) => {
  const tasks = state.filter(task => task.id !== id);  
  return tasks;
}

const tasks = (state = [], action) => {
  let tasks = null;
  state = read_cookie('tasks');
  switch(action.type) {
    case ADD_TASK:
      tasks = [...state, task(action)];
      bake_cookie('tasks', tasks);
      return tasks;
    case DELETE_TASK:
      tasks = removeById(state, action.id);
      bake_cookie('tasks', tasks);
      return tasks;    
    default:
      return state;
  }
}

export default tasks;