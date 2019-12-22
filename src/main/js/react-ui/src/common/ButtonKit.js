import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ButtonKit extends PureComponent {
    static propTypes = {
        /** Наименование кнопки. */
        label: PropTypes.string,

        /** Стиль рендеринга кнопки. */
        color: PropTypes.oneOf(['grey', 'green', 'blue', 'red', 'white', 'a-green', 'a-white']),

        /** @ignore */
        dataTest: PropTypes.string,

        /** @ignore */
        className: PropTypes.string,

        /** Размер элемента. */
        size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),

        /** Кнопка недоступна для действий. */
        disabled: PropTypes.bool,

            /** @ignore */
        onClick: PropTypes.func,
    };

    render() {
        const {label, onClick, color, size, dataTest, icon, className, disabled} = this.props;
        let sizeIcon = (size === 's') ? 16 : (size === 'm') ? 20 : (size === 'l') ? 24 : (size === 'xl') ? 34 : (size === 'xxl') ? 48 : null;
        const classes = classNames(`btn-${color}`, `btn-${size}`, className, {
            '-has-no-label': !label,
        });

        return (
            <button
                data-test={dataTest}
                type="button"
                className={classes}
                disabled={disabled}
                onClick={onClick}
            >
                <div className='tf-kit-button-content'>
                    {label &&
                    <div className='tf-kit-button-text'>{label}</div>
                    }
                </div>
            </button>
        );
    }
}