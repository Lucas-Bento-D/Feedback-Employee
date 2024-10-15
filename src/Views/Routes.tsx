
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Employee from './Employee';
import Container from '../Components/Container';

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
        <Container>
            <RouterProvider {...{router}}/>
        </Container>
    )
}
export default Routes