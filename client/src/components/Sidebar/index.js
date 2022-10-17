import React from 'react';
import { useTheme } from '../../utils/ThemeContext';
import SidebarButton from './SidebarButton';
import SidebarCard from './SidebarCard';


export default function Sidebar() {
  
  const { isMobile } = useTheme();

  return (
    <>
      {isMobile
        ? <div className='row d-flex justify-contents-center '>
            <SidebarButton />
          </div>
        : <div>Not Mobile</div>
      }
    </>
  );

}
