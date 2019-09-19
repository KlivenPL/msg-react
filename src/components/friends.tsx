import Friend from './friend';
import React, { Component } from 'react';



export default class Friends extends Component<{}, {friends:Array<Friend>}>{
    static FriendsList:Array<Friend>;
    constructor(props:any){
        super(props);
        this.state ={
            friends:Array<Friend>()
        };
        Friends.FriendsList = this.state.friends;
       // var fs = require('fs');

       /* try {
            var data = fs.readFileSync('../database/friends_list.json', 'utf8');
           //console.log(data); 
            let js = JSON.parse(data);
            alert(js.friends.length);
            for(let friend of js.friends)
                alert(friend.name);   
        } catch(e) {
            console.log('Error:', e.stack);
        }*/


        fetch("http://31.6.70.35/friends_list.php").then(res=>{
            console.log(res);
            res.json().then(jObj=>{
                console.log(jObj);
                /*for(let friend of jObj.friends)
                    this.friends.push(friend);*/
                this.setState({friends:jObj.friends});
            })
        })
        

    }
    render(){
       //alert(this.state.friends.length);
        return(
            <ul className={"friends"}>
            {this.state.friends.map((friend, index) => (
            <Friend name={friend.name} surname={friend.surname} />
            ))}
            </ul>
        );
    }
}