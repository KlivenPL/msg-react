import React, {Component} from 'react';

class Friend extends Component<{name:string, surname:string}>{
    public name:string="Imie";
    public surname:string = "Nazwisko";
    constructor(props:{name:string, surname:string}){
        super(props);
        this.name = props.name;
        this.surname = props.surname;
    }
    render(){
        return(
        <li className ={"friend"}>
            Ziomek: {this.props.name} {this.props.surname}
        </li>

        );
    }
}

export default Friend;