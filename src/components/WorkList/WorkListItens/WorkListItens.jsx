import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Button, Loading, TextField, TIPO_BUTTON } from '../../../components'

import style from './WorkListItens.module.css';


const WorkListItens = (props) => {
    const { id, name } = props;
    
    const  [updateWorks, setUpdateWoeks] = useState(false);

    const { loadingEdit, loadingDelete, editWorks, removeWork } = useAppContext();

    const loadingNowEdit = loadingEdit == id;
    const loadingNowDelete = loadingDelete == id;

    const onBlurWorks = (e) => {
        const nameWork = e.currentTarget.value;

        editWorks(id, nameWork);

        setUpdateWoeks(false);
    };

    return (
        <li className={style.WorkListItens}>
            {(loadingNowEdit || updateWorks) && (
                <TextField 
                    defaultValue={name}
                    onBlur={onBlurWorks} 
                    autoFocus 
                />
            )}
            {!loadingNowEdit && !updateWorks && (
                <span onDoubleClick={() => setUpdateWoeks(true)}>{name}</span>
            )}

            {loadingNowEdit && (
                <Loading />
            ) }

            <Button 
                text={loadingNowDelete ? <Loading /> : '-'} 
                tipo={TIPO_BUTTON.LAST}
                onClick={() => removeWork(id)}
            />
        </li>
    );
};

export { WorkListItens };