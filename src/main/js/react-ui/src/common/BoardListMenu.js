import React, {PureComponent} from "react";
import axios from "axios";
import {ButtonKit as Button} from "./ButtonKit";
import {InputKit as Input} from "./InputKit";
import {BoardCard} from "../cards/BoardCard";

export class BoardListMenu extends PureComponent {
    state = {
        displayMenu: false,
        isCreateBoardPopup: false,
        boardName: '',
        currentBoard: ''
    };

    showBoardList = (event) => {
        event.preventDefault();
        let url = '/board/getList';
        axios.get(url).then((res) => {
            this.setState({
                    displayMenu:true,
                    data: res.data
                },
                () => {document.addEventListener('click', this.hideBoardList)})
        })
    };

    hideBoardList = () => {
        this.setState({displayMenu:false},
            () => {document.removeEventListener('click', this.hideBoardList)})
    };

    createBoard = () => {
        const { boardName } = this.state;
        let requestData = {
            name: boardName
        };
        const URL = '/board/create';
        axios.post(URL, requestData)
            .then(() => {
                this.setState({boardName: '', isCreateBoardPopup: false})
            })
    };

    getItem = (index, item) => {
        return (
            <li id={index} onClick={(value) => this.selectBoard(value)}>{item.name}</li>
        )
    };

    selectBoard = (value) => {
        const {data} = this.state;
        this.setState({currentBoard: data[value.target.id]});
    };

    render() {
        const {displayMenu, isCreateBoardPopup, boardName, data, currentBoard} = this.state;

        return (
            <div>
                <div onClick={this.showBoardList}> Доски
                </div>
                { displayMenu && (
                    <div>
                        <ul>
                            {data && data.map((item , index)=> this.getItem(index, item))}
                            <li>
                                <Button size={'m'} label={'Создать новую доску'} onClick={() => this.setState({isCreateBoardPopup:true})}/>
                            </li>
                        </ul>
                    </div>
                )}
                {currentBoard && (<BoardCard board={currentBoard}/>)}
                { isCreateBoardPopup &&
                    <div>
                        <Input value={boardName} placeholder={'Добавить заголовок доски'} onChange={(event => this.setState({boardName: event.target.value}))}/>
                        <Button label={'Сохранить'} onClick={this.createBoard}/>
                        <Button label={'Отмена'} onClick={() => {this.setState({isCreateBoardPopup:false})}}/>
                    </div>
                }
            </div>
        )
    }
}
export default BoardListMenu