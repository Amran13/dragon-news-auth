import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const authInfo = useContext(authContext)
    const { user } = authInfo

    return (
        <div>
            {
                user ? children
                    : <Navigate to="/login"></Navigate>

            }


        </div>
    );
};

export default PrivateRoute;