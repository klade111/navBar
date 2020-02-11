import React from 'react';

 function card(props) {
    return (
        <div>
            <ul className="nav-m" >
    {props.menu.map(el=><li className="menu">{el.menu}{el.dropdown && <ul className="drop-m">{el.dropdown.map(el=><li>{el}</li>)}</ul>}</li>)}
    <li></li>
            </ul>
        </div>
    )
}

export default card