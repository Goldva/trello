import React, {PureComponent} from "react";
import {ButtonKit as Button} from "./ButtonKit";
import axios from "axios";


export class Menu extends PureComponent {
    state = {
        boardList: false,
        isCreateBoardPopup: false
    };

    constructor(props) {
        super(props);
    }
    getAllBoard = () => {
        let url = '/board/getList';
        axios.get(url).then((res) => {
            this.setState({
                boardList: true,
                data: res.data
            });

            if (this.boardListRef) {
                this.boardListRef.focus();
            }
        })
    };

    createBoard = (value) => {
        console.log('value', value)
    };

    viewBoards() {

    }

    render() {
        const {boardList, isCreateBoardPopup}  = this.state;
        return (
            <div className="App">
                <Button size={'m'} label={'Доски'} onClick={this.getAllBoard}/>
                { boardList && (
                    <div
                        tabIndex="-1"
                        ref={(boardListRef) => {this.boardListRef = boardListRef}}
                        onBlur={() => {this.setState({boardList: false})}}
                    >
                        {this.viewBoards()}
                        <Button size={'m'} label={'Создать новвую доску'} onClick={() => {this.setState({:true})}}/>
                        { isCreateBoardPopup &&
                            <div>
                                <Button label={'Сохранить'} onClick={this.createBoard}/>
                                <Button label={'Сохранить'} onClick={() => {this.setState({isCreateBoardPopup:false})}}/>
                            </div>
                        }
                    </div>
                )}
            </div>
        )
    }
}