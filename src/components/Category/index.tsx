import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

interface CategoryProps {
    options: string[]
}

export default function Category({options}: CategoryProps): ReactElement {
    const GorS = useAppSelector(state => state.GorS)

    //console.log(options);
    
    return (
        <div className="trending">
            <h3 className="trending__title">Tendencias</h3>
            <ul className="trending__list">
                {options.map(e=>
                    <Link to={`/search${GorS.value}s/${e}`}  key={e + options.indexOf(e)} >
                        <li className="trending__list__i" >
                            {e.charAt(0).toUpperCase() + e.slice(1)}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}
