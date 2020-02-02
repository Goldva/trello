import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';

export class InputKit extends PureComponent{
    static propTypes = {
        label: PropTypes.string,
        width: PropTypes.number,
        placeholder: PropTypes.string,
        value: PropTypes.any,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        type:PropTypes.string
    };

    render() {
        const {
            type, label, placeholder, value, disabled, width, onChange, onBlur, ...other
        } = this.props;

        return (
            <div>
                {label &&
                    <label>{label}</label>
                }
                <div>
                    <input
                        {...other}
                        type={type ? type : "text"}
                        style={{width: width + 'px'}}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        onChange={onChange ? onChange : () => {}}
                        onBlur={onBlur ? onBlur : () => {}}
                    />
                </div>
            </div>
        );
    }



}