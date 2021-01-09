import React from 'react';
import {FaHome,FaInfoCircle,FaImages,FaFilm,FaImage,FaPhoneAlt,FaCaretUp,FaCaretDown} from 'react-icons/fa';
export const SidebarData =[
    {
        title:'Home',
        path:'/',
        icon:<FaHome/>,
        iconClosed:<FaCaretDown/>,
        iconOpened:<FaCaretUp/>
    },
    {
        title:'About Us',
        path:'/about',
        icon:<FaInfoCircle/>,
        iconClosed:<FaCaretDown/>,
        iconOpened:<FaCaretUp/>
    },
    {
        title:'Gallery',
        path:'#',
        icon:<FaImages/>,
        iconClosed:<FaCaretDown/>,
        iconOpened:<FaCaretUp/>,

        subNav:[
            {
                title:'Wedding',
                path:'/wedding',
                icon:<FaImage/>
            },
            {
                title:'Baby',
                path:'/baby',
                icon:<FaImage/>
            },
            {
                title:'Maternity',
                path:'/maternity',
                icon:<FaImage/>
            }
        ]
    },
    
    {
        title:'Wedding Film',
        path:'/weddingfilm',
        icon:<FaFilm/>,
        iconClosed:<FaCaretDown/>,
        iconOpened:<FaCaretUp/>
    },
    {
        title:'Contact Us',
        path:'/contact',
        icon:<FaPhoneAlt/>,
        iconClosed:<FaCaretDown/>,
        iconOpened:<FaCaretUp/>
    }
]