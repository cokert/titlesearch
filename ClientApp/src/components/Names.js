import React from 'react';

export function Names(props) {
    return (
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Language
                    </th>
                    <th>
                        Type
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.names.map((n, i) => (
                    <tr key={i}>
                        <td>
                            {n.titleName}
                        </td>
                        <td>
                            {n.titleNameLanguage}
                        </td>
                        <td>
                            {n.titleNameType}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}