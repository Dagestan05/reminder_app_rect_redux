import React, {Component} from 'react';
import '../App.css';
import moment from 'moment';

//REDUX
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

//Actioncreator
import { addReminder, deleteReminder, clearReminders } from '../actions/index';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      text: '',
      dueDate: ''
    }
  }

  appAddReminder(){
    console.log('state from appAddReminder', this.state)
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  appDeleteReminder(id){
    console.log("deleting in appDeleteReminder: ", id)
    this.props.deleteReminder(id);
  }

  renderReminders(){
    const {reminders} = this.props;
    return(
      <ul className="list-group col-sm-6 col-sm-offset-3">
        {
          reminders.map(reminder =>{
            return(
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                
                <div className="list-item delete-button"
                      onClick = {()=> this.appDeleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    console.log("Props from render() ", this.props)
    return(
      <div className="App">
        <div className="title">Reminder App</div>

        <div className="form-inline">
          <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                placeholder="I have to ..."
                onChange = {event=> this.setState({text: event.target.value})}
            />
            <input 
                type="date" 
                className="form-control"
                onChange = {(event)=> this.setState({dueDate: event.target.value})}   
            />
          </div>

          <button
                type="button"
                className="btn btn-success"
                onClick = {()=> this.appAddReminder()}
          >
                Add Reminder
          </button>
        </div>
        <div className="reminders">
            {this.renderReminders()}
        </div>
        <button 
                className="btn btn-danger clear-button"
                onClick={()=>this.props.clearReminders()}
        >
          Clear All Reminders
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch)
}

function mapStateToProps(state) {
  console.log('State from mapStateToProps: ', state)
  return{ reminders: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
