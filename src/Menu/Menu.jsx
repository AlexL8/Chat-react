import classNames from "classnames";
import React from "react";
import './Menu.css'

const Menu = ({header, items, isActive, setActive}) => {
    return (
        <div className={classNames('menu', {'active': isActive})} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item => 
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="menu__icons">{item.icon}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;