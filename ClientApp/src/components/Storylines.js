import React from 'react';
import PropTypes from 'prop-types';

export function Storylines(props) {
    return (
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>
                        Language
                    </th>
                    <th>
                        Type
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.storylines.map((s, i) => (
                <tr key={i}>
                    <td>
                        {s.language}
                    </td>
                    <td>
                        {s.type}
                    </td>
                    <td>
                        {s.description}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}


Storylines.propTypes = {
    storylines: PropTypes.array,
};