import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action)=>{
  return{
    text: action.payload,
    dueDate: action.dueDate,
    id: Math.random()
  }
}
const remindersReducer = (state=[], action)=>{
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      // reminders = [...state, action.payload];
      console.log('Action passed to reducer: ', action)
      console.log('reminders as state from reducer ', reminders)
      return reminders;
    case DELETE_REMINDER:
      reminders = state.filter(reminder=> reminder.id !== action.payload) 
      bake_cookie('reminders', reminders);
      return reminders
    case CLEAR_REMINDERS:
      reminders = []
      bake_cookie('reminders', reminders);
      return reminders
    default:
      return state;
  }
}

export default remindersReducer;