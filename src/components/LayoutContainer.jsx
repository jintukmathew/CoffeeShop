import React from 'react';
import Header from './Header'


const LayoutContainer = (props) => (
    <div className="mainBody">
       <Header />
          { props.children }
    </div>
 );


export default LayoutContainer;
