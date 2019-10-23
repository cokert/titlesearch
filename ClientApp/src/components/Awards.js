import React from 'react';

export function Awards(props) {
    return (
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>
                        Source
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        Year
                    </th>
                    <th>
                        Won?
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.awards.map((a, i) => (
                    <tr key={i}>
                        <td>
                            {a.awardCompany}
                        </td>
                        <td>
                            {a.award}
                        </td>
                        <td>
                            {a.awardYear}
                        </td>
                        <td>
                            {a.awardWon ? "Yes" : "No"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}