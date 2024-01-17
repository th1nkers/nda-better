import React from 'react';
import LoadingSvg from '../../../assets/shared/LoadingIcon.svg';

const Loading = ({error}) => {
    return (
        <div className="center loading-section">
            {error ? <h4 id='loading-error'>{error}</h4> : <img src={LoadingSvg} alt="loading..." />}
        </div>
    )
}

export default Loading;