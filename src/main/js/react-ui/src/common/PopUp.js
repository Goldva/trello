import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export class PopUp extends PureComponent {

    static propTypes = {
        /** @ignore */
        className: PropTypes.string,

        /** Функция для скрытия модального окна. */
        onClose: PropTypes.func,

        /** Содержимое компонента. */
        children: PropTypes.any.isRequired,
    };

    static defaultProps = {
        onClose: () => {},
        isClosedOutside: true,
    };

    render() {
        const {className, onClose, children, isClosedOutside, ...props} = this.props;
        const popupClasses = classNames('tf-popupContainer', className && className);

        return (
            <div className="tf-popup-bg">
                <div
                    className={popupClasses}
                    ref={this.container}
                    {...props}
                >
                    <span className="tf-popup-closeBtn"
                          onClick={onClose}
                    ></span>
                    {children}
                </div>
            </div>
        )
    }
}

export default PopUp;
