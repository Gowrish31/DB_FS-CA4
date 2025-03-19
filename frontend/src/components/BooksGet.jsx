import React from "react";

function BooksGet({Books}){
    return(
        <div>
            <br />
            <li>{Books.title}</li>
            <li>{Books.genre}</li>
             {Books.author? (
                <li>auhtor:{Books.author.name}</li>
             ): null}
        </div>
    )

}
export default BooksGet