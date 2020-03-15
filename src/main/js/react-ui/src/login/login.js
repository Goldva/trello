import React, {PureComponent} from "react";
import {InputKit as Input} from "../common/InputKit";
import {ButtonKit as Button} from "../common/ButtonKit";
import axios from "axios";

export class Login extends PureComponent {
    state = {
        username:'u',
        password:'p'
    };

    login = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);

        axios({method:"post", url:'/login', data:data})
            .then(res =>{
                console.log("res",res);
            })
            .catch(error=> {
                console.log("error", error);
            })
    };
    render() {
        let {username, password} = this.state;
        return (
            <form onSubmit={this.login}>
                <Input type={"text"}
                       name={"username"}
                       placeholder={"Login a"}
                       value={username}
                       onChange={(event => this.setState({username: event.target.value}))}
                />
                <Input type={"password"}
                       name={"password"}
                       placeholder={"password"}
                       value={password}
                       onChange={(event => this.setState({password: event.target.value}))}
                />
                <Button label={"Вход"}
                        type={"submit"}/>
            </form>
        )
    }
}