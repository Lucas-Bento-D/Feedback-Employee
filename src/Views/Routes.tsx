
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Employee from './Employee';
import Container from '../Components/Container';
import Header from '../Components/Header';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/employee/:id",
        element: <Employee />
    }
])
const Routes = () => {
    return (
        <>
            <Header />
            <Container className="my-4">
                <RouterProvider {...{router}}/>
            </Container>
        </>
    )
}
export default Routes