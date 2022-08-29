import logo from './assets/logo_V_small.png';

function Header(props) {  
  return (
    <header className='header'>
      <div className='logo'>
        <img onClick={() => {window.location.reload()}} alt="" src={logo} />
        <p>Admin Panel</p>
      </div>
      <div className="nav">
        <div>
          <button onClick={() => props.handleTabClick('users')} className={props.activeTab === 'users' ? 'active' : ''}>Users</button>
          <button onClick={() => props.handleTabClick('roles')} className={props.activeTab === 'roles' ? 'active' : ''}>Roles</button>
          <button onClick={() => props.handleTabClick('audit')} className={props.activeTab === 'audit' ? 'active' : ''}>Audit Logs</button>
        </div>
        <div>
          <button>Sign Out</button>
        </div>
      </div>
    </header>
  );
}

export default Header;