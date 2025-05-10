import {Navigate} from 'react-router-dom';
import {useAuth} from '../contexts/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {isAuthenticated, loading} = useAuth();

    if(!isAuthenticated()){
        return <Navigate to = '/login' />
    }

    return children;
}

export default ProtectedRoute;
