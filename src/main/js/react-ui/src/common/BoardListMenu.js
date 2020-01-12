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
        currentBoardId: ''
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

    createBoard = (value) => {
        const { boardName } = this.state;
        let requestdata = {
            name: boardName
        };
        const URL = '/board/create';
        axios.post(URL, requestdata)
            .then(() => {
                this.setState({boardName: '', isCreateBoardPopup: false})
            })
    };

    getItem = (item) => {
        return (
            <li id={item.id} onClick={(value) => this.selectBoard(value)}>{item.name}</li>
        )
    };

    selectBoard = (value) => {
        this.setState({currentBoardId: value.target.id});
    };
    render() {
        const {displayMenu, isCreateBoardPopup, boardName, data, currentBoardId} = this.state;

        return (
            <div>
                <div onClick={this.showBoardList}> Доски
                </div>
                { displayMenu && (
                    <div>
                        <ul>
                            {data && data.map(item => this.getItem(item))}
                            <li>
                                <Button size={'m'} label={'Создать новую доску'} onClick={() => this.setState({isCreateBoardPopup:true})}/>
                            </li>
                        </ul>
                    </div>
                )}
                {currentBoardId && (<BoardCard boardId={currentBoardId}/>)}
                { isCreateBoardPopup &&
                    <div>
                        <Input value={boardName} placeholder={'Добавить заголовок доски'} onChange={(value => this.setState({boardName: value}))}/>
                        <Button label={'Сохранить'} onClick={this.createBoard}/>
                        <Button label={'Отмена'} onClick={() => {this.setState({isCreateBoardPopup:false})}}/>
                    </div>
                }
            </div>
        )
    }
}
export default BoardListMenu