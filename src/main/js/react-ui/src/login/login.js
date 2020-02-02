import React, {PureComponent} from "react";
import {InputKit as Input} from "../common/InputKit";
import {ButtonKit as Button} from "../common/ButtonKit";

export class Login extends PureComponent {
    render() {
        return (
            <div>
                <Input type={"text"}
                       placeholder={"Login"}
                />
                <Input type={"password"}
                       placeholder={"password"}
                />
                <Button label={"Вход"}
                />

            </div>
        )
    }
}