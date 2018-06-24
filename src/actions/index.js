import { ADD_REMINDER, CLEAR_REMINDERS } from '../constants';
import { DELETE_REMINDER } from '../constants';


export const addReminder = (text, dueDate)=>{
  const action = {
    type: ADD_REMINDER,
    payload: text,
    dueDate: dueDate
  }
  console.log('Action from addReminder', action)
  return action;
}

export const deleteReminder = (reminderId)=>{
  const action = {
    type: DELETE_REMINDER,
    payload: reminderId
  }
  console.log("deleting in action: ", action)
  return action;
}
export const clearReminders = ()=>{
  const action = {
    type: CLEAR_REMINDERS
  }
  return action;
}