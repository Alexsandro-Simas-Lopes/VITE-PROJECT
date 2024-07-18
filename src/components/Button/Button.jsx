import { TIPO_BUTTON } from './constants';
import style from './Button.module.css';

const Button = (props) => {
    const {text, tipo = TIPO_BUTTON.FIRST, ...outrasProps} = props;
    return (
        <button className={style.Button} tipo={tipo} {...outrasProps}>
            {text}
        </button>
    );
};

export { Button };