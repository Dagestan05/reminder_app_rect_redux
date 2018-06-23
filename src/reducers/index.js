import { ADD_REMINDER } from '../constants';


const reminder = (action)=>{
  return{
    text: action.payload,
    id: Math.random()
  }
}
const remindersReducer = (state=[], action)=>{
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      // reminders = [...state, action.payload];
      console.log('Action passed to reducer: ', action)
      console.log('reminders as state from reducer ', reminders)
      return reminders;
    default:
      return state;
  }
}

export default remindersReducer;