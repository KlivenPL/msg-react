import Friend from './friend';
import React from 'react';

export default class Conversation extends React.Component<{friendp:Friend}, {friend: Friend}>{
    constructor(props: {friendp:Friend}){
        super(props);
        this.state={
            friend: props.friendp
        }
    }
    render(){
        return(
            <div className={"convName"}>
                CoNvErSatIoN wItH {this.props.friendp.name}
                <div className={"convBox"}>

                </div>
                <button className={"convButton"}>
                    Send
                </button>
            </div>
        );
    }
}