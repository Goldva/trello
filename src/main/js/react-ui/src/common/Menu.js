import React, {PureComponent} from "react";
import {ButtonKit as Button} from "./ButtonKit";
import axios from "axios";
import ReactDOM from 'react-dom';


export class Menu extends PureComponent {
    state = {

    };
    boardListRef = React.createRef();

    getAllBoard() {
        let url = '/board/getList';
        axios.get(url).then((res) => {
            this.boardListRef.focus();
        })
    }

    render() {
        return (
            <div className="App">
                <Button size={'m'} label={'Доски'} onClick={this.getAllBoard}/>
                <div ref={this.boardListRef} style={display:}>ssss</div>
            </div>
        )
    }
}