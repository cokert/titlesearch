import React from 'react';

export function Participants(props) {
    return (
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Type
                    </th>
                    <th>
                        Role
                    </th>
                    <th>
                        On Screen?
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.people.map((p, i) => (
                    <tr key={i}>
                        <td>
                            {p.name}
                        </td>
                        <td>
                            {p.participantType}
                        </td>
                        <td>
                            {p.roleType}
                        </td>
                        <td>
                            {p.isOnScreen ? "Yes" : "No"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}