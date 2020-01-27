import React, {PureComponent} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import {ButtonKit as Button} from "../common/ButtonKit";
import {InputKit as Input} from "../common/InputKit";

export class BoardCard extends PureComponent{
    propTypes = {
        board: PropTypes.any
    };
    state = {
        columnName: '',
        isCreateColumn: false,
        activeColumn: '',
        columns: ''
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const { board } = nextProps;
        let url = '/column/getList';
        axios.get(url, {params:{boardId:board.id}})
            .then(res => {
                this.setState({columns: res.data})
            })
    }

    createColumn = () => {
        const {board} = this.props;
        const {columnName, columns} = this.state;
        let data = {name: columnName, board: board};
        let url = '/column/create';
        axios.post(url, data)
            .then((res) => {
                columns.push(res.data);
                this.setState({isCreateColumn: false});
            })
    };

    createCard = (event) => {
        const {value} = event.target;
        const {activeColumn, columns} = this.state;
        let data = {name: value, column: columns[activeColumn]};
        let url = '/card/create';
        axios.post(url, data)
            .then(() => {this.setState({activeColumn: ''})})

    };

    getItemsCard = (columnIndex, item) => {
        const {activeColumn} = this.state;
        return (
            <div style={{display:'inline-block', margin:'10px'}}>
                <div>
                    <span>{item.name}</span>
                    { activeColumn !== columnIndex && (
                        <Button label={'Добавить еще одну карточку'}
                                onClick={()=>{
                                    this.setState({activeColumn: columnIndex})
                                }}/>
                    )}
                    { activeColumn === columnIndex &&
                        <Input placeholder={'Введите заголовок для карточки'} onBlur={this.createCard}/>
                    }
                </div>
            </div>
        )
    };

    render() {
        const {columns, isCreateColumn, columnName} = this.state;
        return(
            <div>
                {columns && columns.map((item, index) => this.getItemsCard(index, item))}
                { !isCreateColumn && (
                    <div style={{display:'inline-block', margin:'10px'}}>
                        <Button label={'Создать новую колонку'} onClick={() => this.setState({isCreateColumn: true})}/>
                    </div>
                )}

                { isCreateColumn &&
                    <div style={{display:'inline-block', margin:'10px'}}>
                        <Input value={columnName} placeholder={'Введите заголовок списка'} onChange={(event => this.setState({columnName: event.target.value}))}/>
                        <Button label={'Добавить'} onClick={this.createColumn}/>
                    </div>
                }
            </div>
        )
    }
}