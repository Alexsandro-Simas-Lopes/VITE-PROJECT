import style from './Footer.module.css';

const Footer = (props) => {
const {creator} = props;
    return (
        <div className={style.Footer}>
            <p>React Básico - 2024 - {creator}</p>
        </div>
    )
};
export { Footer };