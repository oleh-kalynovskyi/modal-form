import './App.css';
import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import LogIn from './component/LogIn';
import SingUp from './component/SingUp';


function App() {

  const TabContent = ({ content }) => (
    <div className="tabcontent">
      {content}
    </div>
  );

  const [ active, setActive ] = useState(0);
  const openTab = e => setActive(+e.target.dataset.index);

  const items = [
    { title: 'Sing Up', content: <SingUp/> },
    { title: 'Log In', content: <LogIn/> }
  ];

  return (
    <>
    <div className="modal-box">
      <div className="madal-box-buttonts">
        {items.map((n, i) => (
          <button
            key={i}
            className={i === active ? 'active' : ''}
            onClick={openTab}
            data-index={i}
          >{n.title}</button>
        ))}
      </div>
      <CSSTransition
        in={ active }
        timeout={3000}
        classNames="alert"
      >
        <TabContent {...items[active]}/>
      </CSSTransition>
    </div>
    </>
  );
}

export default App;
