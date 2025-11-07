import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/homepage';
import ApplicationLayout from '../layouts/applicationLayout';
import LowerSecondary from '../pages/question/lower_secondary';
import ThankYou from '../pages/thankYou';

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
                            element: <LowerSecondary />,
                            path: '/primary_1',
                        },
                        {
                            element: <>404:NOT FOUND</>,
                            path: '/primary_2',
                        },
                        {
                            element: <>404:NOT FOUND</>,
                            path: '/upper-secondary',
                        },
                        {
                            element: <ThankYou />,
                            path: '/thank-you',
                        },
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