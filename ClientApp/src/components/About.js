import React from 'react';

export function About(props) {
    
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron">
                    <h1>About</h1>
                </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <p>
                    Spun up using <span className='text-monospace'>dotnet new react</span> then hacked together into what's here.
                </p>
                <p>
                    If I had more time, here are a few things I'd improve.
                </p>
                <ul>
                    <li>
                        I'd rework how the navigation works for details.  It's not obvious that there's more info besides hovering over a row and seeing the cursor turn into a hand.  Plus it's kind of busy and hard to follow.  I started down the path of expanding divs and realized it wasn't going to work well way late into the game.
                    </li>
                    <li>
                        The "participants" array has a LOT more information that I'd want to spend some time making work better.  I'd like to have a tabbed interface there.  Maybe one tab for actors, one for Director/Producer/etc.. and one for those that fall into the "Group" for "actors" and ... other people.  I'd still have a table, but the "tabs" would apply a filter to what's in the table.
                    </li>
                    <li>
                        Filtering by other criteria than title (actors or other participants) might be an intersting use.  Displaying/highlighting the relevant results (a la ctrl+f native inthe browser) would be a fun challenge.  I almost started down that path when I was writing the C# side.
                    </li>
                    <li>
                        I'd also want to add more 
                    </li>
                </ul>
                <p>
                    I assumed from the outset there were a lot of documents in the database.  So I was started out with paging with a default page size of 10.  It wasn't until I got around to reporting the count of documents from Mongo that I realized it only had 25.  So then I just set the fetch query to grab all of them.  But the C# end point as well as the Mongo service object are both set up to support paging, FWIW.
                </p>
                <p>
                    Also, the C# models were generated based off a document I got from the DB via Mongo's CLI.  I didn't write all that by hand.
                </p>
            </div>
        </div>
    );
}
