import { createContext, useEffect, useState } from 'react';

import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator, setCreator] = useState('Alex.Simas')

    const [ works, setWorks ] = useState([]);

    const [loadingAdd, setLoadingAdd] = useState(false);
    const [loadingEdit, setLoadingEdit] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(null);
    const [loadingUpload, setLoadingUpload] = useState(null);

    const uploadWorks = async () => {
        setLoadingUpload(true);
        const {data = []} = await api.get('/works');

        setWorks([
            ...data,
        ]);
        setLoadingUpload(false);
    };

    const addWorks = async (nameWork) => {
        setLoadingAdd(true);
        const { data: works } = await api.post('/works', {
            name: nameWork,
        })
        setWorks(estadoAtual => {
            return [
                ...estadoAtual,
                works,
            ];
        });
        setLoadingAdd(false);
    };

    const removeWork = async (idWork) => {
        setLoadingDelete(true);
        await api.delete(`works/${idWork}`);
        setWorks(estadoAtual => {
            const updateWorks = estadoAtual.filter(works => works.id != idWork);

            return[
                ...updateWorks,
            ];
        });
        setLoadingDelete(false);
    };

    const editWorks = async (idWork, nameWork) => {
        setLoadingEdit(true);
        const { data: updateWork} = await api.put(`works/${idWork}`, {
            name:nameWork,
        });

        setWorks(estadoAtual => {
            const updateWorks = estadoAtual.map(works => {
                return works.id == idWork ? {
                    ...works,
                    name: updateWork.name,
                } : works;
            });
            return[
                ...updateWorks,
            ];
        })
        setLoadingEdit(false);
    };

    useEffect(() => {
        uploadWorks();
    }, []);

    return(
        <AppContext.Provider value={{
            creator,
            works,
            addWorks,
            removeWork,
            editWorks,
            loadingUpload,
            loadingAdd,
            loadingEdit,
            loadingDelete,
        }}>
            {children}
        </AppContext.Provider>
    );
};