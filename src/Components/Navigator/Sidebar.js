import React,{useState,useEffect,useCallback} from 'react';
import pageIcon from './pageicon.png';
import {FaTimes,FaBars} from 'react-icons/fa';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import './Sidebar.css';

const Sidebar = ()=>{
    const [open,setOpen]=useState(false);
    const [scroll,setScroll]= useState(false);

    const showMenu = () => setOpen(!open);
    
    const handleScrollMenu = useCallback(()=>{
        const offset= window.scrollY;
        if(offset>200){
            setScroll(true);
        }else{
            setScroll(false);
        }
    },[]);
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollMenu);
        return ()=>window.removeEventListener('scroll',handleScrollMenu);
    })
    
    let navbarClass=['navbarmenu'];
    if(scroll){
        navbarClass.push('navScroll');
    }
    return(
        <div className={navbarClass.join(" ")}>
             <div className="barNav">
            <FaBars className="burgerOpen" onClick={showMenu} />
            <img src={pageIcon} alt="icon" />
        </div>
        <nav className={open ? "navmenu active-menu": "navmenu"}>
        
        <div className="burgerClose" onClick={showMenu}>
        <FaTimes/>
        </div>
        {SidebarData.map((item,index)=>{
            return <SubMenu item={item} key={index} />;
        })}
        </nav>
       
        </div>
    );
}
export default Sidebar;