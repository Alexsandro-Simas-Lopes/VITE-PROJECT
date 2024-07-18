import { FormNewWork, WorkList } from "../../components";

import style from './Inicial.module.css'

const Inicial = () => {
    return (
        <div className={style.Inicial}>
           <FormNewWork />
           <WorkList />
        </div>
        
    );
};

export { Inicial };