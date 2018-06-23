import React, {Component} from 'react';
import '../App.css';

//REDUX
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

//Actioncreator
import { addReminder } from '../actions/index';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      text: '',
      
    }
  }

  appAddReminder(){
    this.props.addReminder(this.state.text)
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
          </div>

          <button
                type="button"
                className="btn btn-success"
                onClick = {()=> this.appAddReminder()}
          >
                Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch)
}

function mapStateToProps(state) {
  console.log('State from mapStateToProps: ', state)
  return{ reminders: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
