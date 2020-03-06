import React, {PureComponent} from "react";
import {InputKit as Input} from "../common/InputKit";
import {ButtonKit as Button} from "../common/ButtonKit";
import axios from "axios";

export class Login extends PureComponent {
    state = {
        username:'',
        password:''
    };

    login = () => {
        const {username, password} = this.state;

        let data = {
            user: username,
            password: password
        };

        axios.post('/login', data)
            .then(res =>{
                console.log("res",res);
            })
            .catch(error=> {
                console.log("error", error);
            })
    };
    render() {
        const {username, password} = this.state;

        return (
            <div>
                <Input type={"text"}
                       placeholder={"Login"}
                       value={username}
                       onChange={(event => this.setState({username: event.target.value}))}
                />
                <Input type={"password"}
                       placeholder={"password"}
                       value={password}
                       onChange={(event => this.setState({password: event.target.value}))}
                />
                <Button label={"Вход"}
                        onClick={this.login}
                />

            </div>
        )
    }
}