import App from '../App';
import React, { Component } from 'react';

class Friend extends Component<{name:string, surname:string}>{
    static indexer:number = 0;
    public name:string="Imie";
    public surname:string = "Nazwisko";
    public id:number=0;

    constructor(props:{name:string, surname:string}){
        super(props);
        this.name = props.name;
        this.surname = props.surname;
        this.id = Friend.indexer++;
    }
    OnFriendSelect=()=>{
       // alert("set state:" + this.name);
        App.Instance.setState({
            appState:{
                activeFriend: this
            }
        });
    }
    render(){
        return(
        <li className ={"friend"}>
            <button onClick={this.OnFriendSelect}>
                Ziomek: {this.props.name} {this.props.surname}
            </button>
        </li>

        );
    }
}

export default Friend;