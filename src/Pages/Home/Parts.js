import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useParts();

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                parts.map(part => <Part
                    key={part._id}
                    part={part}
                ></Part>)
            }
        </div>
    );
};

export default Parts;