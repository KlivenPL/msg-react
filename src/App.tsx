import Conversation from './components/conversation';
import Friend from './components/friend';
import Friends from './components/friends';
import React from 'react';
import Title from './components/title';
import './App.css';

interface AppState{
  activeFriend?: Friend;
}

class App extends React.Component<{}, {appState?: AppState}> {
  static Instance:App;
  constructor(props:{}){
    super(props);
    this.state={
      appState: {
        activeFriend: undefined,
      }
    }
    App.Instance = this;
  }
  render() {
   // if (this.state.appState!.activeFriend !== undefined && this.state.appState!.activeFriend !== null)
    //  alert('render: ' + this.state.appState!.activeFriend!.name);
    let ret = 
    <body className="App">
      <Title/>
      <Friends />
      {this.state.appState!.activeFriend !== undefined ? 
      <Conversation friendp={this.state.appState!.activeFriend}/>
      : ""}
    </body>
    return(
      ret
    );
  }
}

export default App;
