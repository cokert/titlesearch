import React from 'react';
import {SubDetailsWrapper} from './SubDetailsWrapper';
import {Participants} from './Participants';
import {Awards} from './Awards';
import {Names} from './Names';
import {Storylines} from './Storylines';


function combine(words) {
    if (!words) return "";
    var list = "";
    words.forEach(w => list += w + ", ");
    return list.substr(0, list.length-2);
}

export function Detail(props) {
    var genres = combine(props.title.genres);
    var keywords = combine(props.title.keywords);
    
    return (
        <div className="row">
            <div className='col-md-6'>
                <h6>Genres:</h6> {genres}
            </div>
            <div className='col-md-6'>
                <h6>Keywords:</h6>{keywords}
            </div>
            <SubDetailsWrapper name="StoryLines" listCount={props.title.storylines.length} id={props.title._id} widthClass="col-md-12">
                <Storylines storylines={props.title.storylines} />
            </SubDetailsWrapper>
            <SubDetailsWrapper name="Participants" listCount={props.title.participants.length} id={props.title._id} widthClass="col-md-12">
                <Participants people={props.title.participants} />
            </SubDetailsWrapper>
            <SubDetailsWrapper name="Awards" listCount={props.title.awards ? props.title.awards.length : 0} id={props.title._id} widthClass="col-md-7">
                <Awards awards={props.title.awards ? props.title.awards : [] } />
            </SubDetailsWrapper>
            <SubDetailsWrapper name="Other Names" listCount={props.title.otherNames ? props.title.otherNames.length : 0} id={props.title._id} widthClass="col-md-5">
                <Names names={props.title.otherNames ? props.title.otherNames : []} />
            </SubDetailsWrapper>
        </div>
    );
}
  