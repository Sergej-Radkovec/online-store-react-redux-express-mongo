import React from 'react';

import ToolBar from '../../component/ToolBar/ToolBar'

const Layout = (props) => {
  return (
    <>
      <ToolBar/>
      <main>
        {props.children}
      </main>
    </>
  )
};

export default Layout;