import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';

export class InputKit extends PureComponent{
    static propTypes = {
        label: PropTypes.string,
        width: PropTypes.number,
        placeholder: PropTypes.string,
        value: PropTypes.any,
        disabled: PropTypes.bool,
        onChange: PropTypes.func

    };

    render() {
        const {
            label, placeholder, value, disabled, width, onChange, ...other
        } = this.props;

        return (
            <div>
                {label &&
                    <label>{label}</label>
                }
                <div>
                    <input
                        {...other}
                        type="text"
                        style={{width: width + 'px'}}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        onChange={event => onChange(event.target.value)}
                    />
                </div>
            </div>
        );
    }



}