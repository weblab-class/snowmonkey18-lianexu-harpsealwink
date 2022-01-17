import React from 'react';

const LevelHints = (props) => {
    
    return(
        <div>
            <p>
            {String(props.hint)}
            </p>
        </div>
    );
}

export default LevelHints;