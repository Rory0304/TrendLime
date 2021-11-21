import React from 'react';

function Categories({ category }) {
    console.log(category);
    return (
        <div>
            <ol>
                {Object.keys(category).map((cKey) => (
                    <li style={{ color: category[cKey] ? 'red' : 'black' }}>{cKey}</li>
                ))}
            </ol>
        </div>
    );
}

export default Categories;
