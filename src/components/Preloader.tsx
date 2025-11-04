import React from 'react';
import './Preloader.css';

type Props = {
    loading: boolean;
    message?: string;
    className?: string;
};

const Preloader = ({ loading, message, className }: Props) => {

    return (
        <div className={className}>
            {loading && (
                <div className="my-5" data-testid="preloader">
                    <div className="m-5 flex justify-center p-5">
                        <span className="loader"></span>
                    </div>
                    {message && (
                        <p className="w-full text-center text-sm font-semibold">{message}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Preloader;
