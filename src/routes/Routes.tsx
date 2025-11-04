import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const ConfigRoutes = () => {
    const routes = useRoutes([
        {
            children: [
                {
                    element: <div>Home Page</div>,
                    index: true,
                    path: '/',
                    // เลือกช่วงชั่้นการศึกษา
                },
                {
                    element: <div>About Page</div>,
                    path: 'about',
                }
            ]
        }
    ]);
    return routes;
}


export default function Routes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfigRoutes />
        </Suspense>
    )
}