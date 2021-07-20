import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

interface CategoryProps {
    options: string[]
}

export default function Category({options}: CategoryProps): ReactElement {
    //console.log(options);
    
    return (
        <div className="trending">
            <h3 className="trending__title">Tendencias</h3>
            <ul className="trending__list">
                {options.map(e=>
                    <Link to={`/search/${e}`}  key={e + options.indexOf(e)} >
                        <li className="trending__list__i" >
                            {e.charAt(0).toUpperCase() + e.slice(1)}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}
