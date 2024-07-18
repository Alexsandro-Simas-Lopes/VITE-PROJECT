import { useAppContext } from '../../hooks';

import { WorkListItens } from "./WorkListItens";

import style from './WorkList.module.css';

import { Loading } from '../Loading';

const WorkList = () => {
    const { works, loadingUpload } = useAppContext();

    return (
        <ul className={style.WorkList}>
            {loadingUpload && (
                <p>
                    Carregando...
                    <Loading />
                </p>
            )}

            {!loadingUpload && !works.length && (
                <h4>Não há tarefas Cadastradas...</h4>
            )}

            {works.map(item => (
                <WorkListItens 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                />
            ))}
        </ul>
    );
};

export { WorkList };