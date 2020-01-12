import React, {PureComponent} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import {ButtonKit as Button} from "../common/ButtonKit";
import {InputKit as Input} from "../common/InputKit";

export class BoardCard extends PureComponent{
    propTypes = {
        boardId: PropTypes.any
    };
    state = {
        data:{},
        columnName: '',
        isCreateColumn: false
    };
    constructor() {
        super();
        let url = '';
        axios.get(url)
            .then(res => {
                this.setState({data: res.data})
            })
    }

    createColumn = () => {

    }
    render() {
        const {data} = this.props;
        const {isCreateColumn} = this.state;
        return(
            <div>
                { !isCreateColumn && (
                    <Button label={'Создать новую колонку'} onClick={}/>
                )}

                { isCreateColumn &&
                    <div>
                        <Input value={boardName} placeholder={'Введите заголовок списка'} onChange={(value => this.setState({boardName: value}))}/>
                        <Button label={'Добавить'} onClick={this.createBoard}/>
                    </div>
                }
            </div>
        )
    }
}