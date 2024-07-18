import { useState } from 'react';

import { Button, TextField, Loading } from '../../components';
import { useAppContext } from '../../hooks'

import style from './FormNewWork.module.css';

const FormNewWork = () => {
    const { addWorks, loadingAdd } = useAppContext();
    const [ nameWork, setNameWork ] = useState('');

    const onChangeNameWork = (e) => {
        setNameWork(e.currentTarget.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if(!nameWork) {
            return;
        }
        
        addWorks(nameWork);

        setNameWork('');
    };
    return (
            <form className={style.FormNewWork} onSubmit={submitForm}>
                <TextField 
                    value={nameWork} 
                    onChange={onChangeNameWork} 
                />
                <Button text={loadingAdd ? <Loading /> : '+'} />
            </form>
    );
};

export { FormNewWork };