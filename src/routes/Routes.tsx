import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/homepage';
import ApplicationLayout from '../layouts/applicationLayout';
import LowerSecondary from '../pages/question/lower_secondary';
import ThankYou from '../pages/thankYou';
import PrimaryLv1 from '../pages/question/primary_lv1';
import PrimaryLv2 from '../pages/question/primary_lv2';

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
                            element: <PrimaryLv1 />,
                            path: '/primary_2',
                        },
                        {
                            element: <PrimaryLv2/>,
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