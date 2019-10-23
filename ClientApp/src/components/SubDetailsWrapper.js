import React from 'react';
import PropTypes from 'prop-types';

export function SubDetailsWrapper(props) {
    var name = props.name.replace(" ", "_");

    var header = name +"Header" + props.id;
    var headerHash = "#" + header;
    
    var table = name + "Table" + props.id;
    var tableHash = "#" + table;
    
    return (
        <div id={header} className={props.widthClass}>
        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={tableHash}>
                        {props.name} ({props.listCount})
                    </button>
                </h5>
            </div>
            <div id={table} className="collapse hide" data-parent={headerHash}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    );
}


SubDetailsWrapper.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    widthClass: PropTypes.string,
    children: PropTypes.object,
    listCount: PropTypes.number,
};