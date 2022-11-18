import React from 'react';

function HashTag({tags}) {
    return (
        <div>
            {tags && tags.map((tag) =>{
                return <span key={tag}>#{tag}</span>
            })}
        </div>
    );
}

export default HashTag;