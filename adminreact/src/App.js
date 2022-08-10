import { useState } from 'react';
import './App.css';
import Users from './Users';
import Roles from './Roles';
import Audit from './Audit';
import Header from './Header';
import Import from './Import';

function App() {
  const [activeTab, setActiveTab] = useState('users');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <Header activeTab={activeTab} handleTabClick={handleTabClick}  />
      <div className='content'>
        {activeTab === 'users' ? <Users handleTabClick={handleTabClick} /> : null}
        {activeTab === 'roles' ? <Roles /> : null}
        {activeTab === 'audit' ? <Audit /> : null}
        {activeTab === 'import' ? <Import /> : null}
      </div>
    </div>
  );
}

export default App;