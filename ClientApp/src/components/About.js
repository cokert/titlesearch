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
                    Spun up using <span className='text-monospace'>dotnet new react</span> then hacked together into what&apos;s here.
                </p>
                <p>
                    If I had more time, here are a few things I&apos;d improve.
                </p>
                <ul>
                    <li>
                        I&apos;d rework how the navigation works for details.  It&apos;s not obvious that there&apos;s more info besides hovering over a row and seeing the cursor turn into a hand.  Plus it&apos;s kind of busy and hard to follow.  I started down the path of expanding divs and realized it wasn&apos;t going to work well way late into the game.
                    </li>
                    <li>
                        The &quot;participants&quot; array has a LOT more information that I&apos;d want to spend some time making work better.  I&apos;d like to have a tabbed interface there.  Maybe one tab for actors, one for Director/Producer/etc.. and one for those that fall into the &quot;Group&quot; for &quot;actors&quot; and ... other people.  I&apos;d still have a table, but the &quot;tabs&quot; would apply a filter to what&apos;s in the table.
                    </li>
                    <li>
                        Filtering by other criteria than title (actors or other participants) might be an intersting use.  Displaying/highlighting the relevant results (a la ctrl+f native inthe browser) would be a fun challenge.  I almost started down that path when I was writing the C# side.
                    </li>
                    <li>
                        I&apos;d also want to add more 
                    </li>
                </ul>
                <p>
                    I assumed from the outset there were a lot of documents in the database.  So I was started out with paging with a default page size of 10.  It wasn&apos;t until I got around to reporting the count of documents from Mongo that I realized it only had 25.  So then I just set the fetch query to grab all of them.  But the C# end point as well as the Mongo service object are both set up to support paging, FWIW.
                </p>
                <p>
                    Also, the C# models were generated based off a document I got from the DB via Mongo&apos;s CLI.  I didn&apos;t write all that by hand.
                </p>
            </div>
        </div>
    );
}
