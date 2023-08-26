import React from 'react';
import Toolbar from "../Toolbar/Toolbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <header>
      <Toolbar />
    </header>

    <main className="container-fluid" style={{paddingTop: 70}}>
      {children}
    </main>
  </>
);

export default Layout;