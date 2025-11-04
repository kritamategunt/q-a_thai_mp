import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/homepage';
import ApplicationLayout from '../layouts/applicationLayout';

const ConfigRoutes = () => {
    const routes = useRoutes([
        {
            children: [
                {
                    path: "/",
                    element: <ApplicationLayout />,
                    children: [
                        { index: true, element: <HomePage /> },
                        {
                            element: <div>About Page</div>,
                            path: 'about',
                        }
                    ],
                },

            ]
        }
    ]);
    return routes;
}


export default function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfigRoutes />
        </Suspense>
    )
}