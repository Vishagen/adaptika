import { useEffect, useState } from 'react';
import './App.css';
import Users from './Users';
import Roles from './Roles';
import Audit from './Audit';
import Header from './Header';
import Import from './Import';

function App() {
  const [activeTab, setActiveTab] = useState('users');
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    updateRoles();
  }, [])

  function updateRoles() {
    fetch('http://127.0.0.1:8000/adaptika/rolelist').then(async (response) => {
      const data = await response.json();
      setRoleList(data);
    })
  }

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <Header activeTab={activeTab} handleTabClick={handleTabClick}  />
      <div className='content'>
        {activeTab === 'users' ? <Users roleList={roleList} handleTabClick={handleTabClick} /> : null}
        {activeTab === 'roles' ? <Roles updateRoles={updateRoles} roleList={roleList} /> : null}
        {activeTab === 'audit' ? <Audit /> : null}
        {activeTab === 'import' ? <Import /> : null}
      </div>
    </div>
  );
}

export default App;