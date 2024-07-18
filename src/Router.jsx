import { Route, Routes } from 'react-router-dom';
import { Inicial, Page404, SobreMim } from './pages';
import { LayoutPadrao } from './Layouts';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />} >
                <Route path="/" element={<Inicial />} />
                <Route path="/sobre-mim" element={<SobreMim />} />
                <Route path="*" element={<Page404 />} />
            </Route>
            
        </Routes>
    );
};

export { Router };