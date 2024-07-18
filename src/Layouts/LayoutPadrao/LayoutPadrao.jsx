import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Footer } from '../../components';
import { useAppContext } from '../../hooks';

const LayoutPadrao = () => {
    const { creator } = useAppContext();
    return (
        <>
            <Cabecalho />   
                <Conteudo>
                    <Outlet />
                </Conteudo>
            <Footer creator={creator} />
        </>
    );
};

export { LayoutPadrao };