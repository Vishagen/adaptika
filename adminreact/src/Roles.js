import { useState, useEffect } from 'react';

function Roles() {
  const permissionData = {
    "canMute": "Allows the user to mute",
    "canLockWhiteboards": "Allows the user to lock whiteboards",
    "canSendWorldMessage": "Allows the user to send world messages",
  } 

  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [permission, setPermission] = useState("");
  const [edited, setEdited] = useState(false);
  const [roleLoaded, setRoleLoaded] = useState(false);

  // Constructor
  useEffect(() => {
    if (localStorage.getItem('roles')) {
      setRoles(JSON.parse(localStorage.getItem('roles')));
    }
    else {
      setRoles([]);
    }
  }, []);
  
  function saveRole() {
    localStorage.setItem(`role:${role}`, JSON.stringify(permissions));
    setEdited(false);
  }

  function selectRole(role) {
    console.log(role);
    if (role === "--newrole--") {
      // Prompt for name
      const newRole = prompt("Enter new role name");
      setRoles([...roles, newRole]);
      localStorage.setItem('roles', JSON.stringify(roles));

      setRole(newRole);
      setEdited(false);
      setRoleLoaded(true);
    }
    else if (role !== "-") {
      setRole(role);
      setEdited(false);
      setRoleLoaded(true);
    }
    else {
      return;
    }

    const data = localStorage.getItem(`role:${role}`);
    if (data) {
      setPermissions(JSON.parse(data));
    }
    else {
      setPermissions([]);
    }
  }

  function addPermission() {
    setPermissions([...permissions, permission]);
    setEdited(true);
  }

  function removePermission(name) {
    setPermissions(permissions.filter(permission => permission !== name));
    setEdited(true);
  }

  return (
    <div>
      <h1>Roles</h1>
      <p>Select a role from the dropdown below to manage it {role}.</p>
  
      <div id="roleControls">
        <select onChange={(event) => {selectRole(event.target.value)}} value={role} id="rolesDropdown">
          <option value="-">Select:</option>

          {roles.map((role, index) => {
            return <option key={index} value={role}>{role}</option>
          })}

          <option value="--newrole--">-- New Role --</option>
        </select>
        <button className="btn addRoleButton removeButton">
          <i className="bx bx-trash"></i>
        </button>
      </div>
  
      <div id="results2" className={roleLoaded ? '' : 'hidden'}>
        <h2>Manage Permissions</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
            {
              permissions.length ? permissions.map((permission, index) => {
                return <tr key={index}>
                  <td>{permission}</td>
                  <td>{permissionData[permission]}</td>
                  <td><button onClick={() => {removePermission(permission)}} className="btn removeButton">
                    <i className="bx bx-trash"></i>
                  </button></td>
                </tr>
              }) : <tr><td colSpan="3">No permissions have been assigned to this role.</td></tr>
            }
          </tbody>
        </table>
        <br />
        <h2>Add Permission</h2>
        <p>Select a permission and select the plus button to add it to this role {permission}.</p>
        <div id="roleControls">
        <select onChange={(event) => setPermission(event.target.value)} value={permission} id="permissionsDropdown">
            <option value="-">Select:</option>
            {
              Object.keys(permissionData).filter(p => !permissions.includes(p)).map((permission, index) => {
                return <option key={index} value={permission}>{permission}</option>
              })
            }
          </select>
          <button onClick={() => addPermission()} className="btn addRoleButton">
            <i className="bx bx-plus"></i>
          </button>
        </div>

        <br />
        <button onClick={() => saveRole()} className={edited ? `btn` : `btn disabled`}>Save Changes</button>
      </div>
    </div>
  );
}

export default Roles;