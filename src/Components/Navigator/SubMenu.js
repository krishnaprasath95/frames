import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.css';
const SubMenu = ({item}) => {
    const [subnav,setSubnav] = useState(false);

    const showSubNav= () => setSubnav(!subnav);

    return (
        <>
        <Link className="menu-link" to={item.path} onClick={item.subNav && showSubNav}>
        <div>
            {item.icon}
            <span className="sidebarLabel">
                {item.title}
            </span>
        </div>
        <div>
            {item.subNav && subnav 
            ?item.iconOpened
            :item.subNav
            ?item.iconClosed
            :null
            }
        </div>
        </Link>
        {
            subnav && item.subNav.map((item,index)=>{
                return(
                    <Link className="dropdown-link" to={item.path} key={index}>
                        {item.icon}
                        <span className="sidebarLabel">
                            {item.title}
                        </span>
                    </Link>
                )
            })
        }
        </>
    )
}

export default SubMenu;
