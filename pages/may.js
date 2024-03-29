import React from 'react'
import { tw } from 'twind'

const MayPage = () => {
    return (
        <>
            <a href="/" className="go-back pl-10 mt-5">Go back</a>
            <div className={tw`text-center m-0`}>
                <h1>MAY</h1>
                <p className={tw`mt-10`}>in progress</p>
            </div>
        </>
    );
};

export default MayPage
