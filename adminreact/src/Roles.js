import { useState, useEffect } from 'react';

function Roles(props) {

  useEffect(() => {
    fetch('http://127.0.0.1:8000/adaptika/permissionlist').then(async (response) => {
      const data = await response.json();
      setPermissionList(data);
      console.log(data)
    })
  }, [])

  const [role, setRole] = useState("");
  const [permissionList, setPermissionList] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [permission, setPermission] = useState("");
  const [edited, setEdited] = useState(false);
  const [roleLoaded, setRoleLoaded] = useState(false);
  
  function saveRole() {
    fetch(`http://127.0.0.1:8000/adaptika/roles/${role.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: role.name,
        permissions: JSON.stringify(permissions)
      })
    }).then((response) => {
      console.log(response)
      setEdited(false);
    })
  }

  async function selectRole(roleInput) {
    let role;
    if (roleInput === "--newrole--") {
      // Prompt for name
      const newRole = prompt("Enter new role name");
      // Add role to datbabse and then props.updateroles
      await fetch('http://127.0.0.1:8000/adaptika/rolelist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newRole,
          permissions: `[]`
        })
      });
      
      props.updateRoles()

      setRole({
        name: newRole,
        permissions: `[]`
      });

      setEdited(false);
      setRoleLoaded(true);
      setPermissions([]);
    }
    else if (role !== "-") {
      role = JSON.parse(roleInput)
      setRole(role);
      setEdited(false);
      setRoleLoaded(true);
      console.log(role)
      setPermissions((typeof(role.permissions) === 'object' || role.permissions === '') ? [] : JSON.parse(role.permissions));
    }
    else {
      return;
    }
  }

  function addPermission() {
    console.log(permission)
    setPermissions([...permissions, JSON.parse(permission)]);
    setEdited(true);
  }

  function removePermission(name) {
    setPermissions(permissions.filter(permission => permission !== name));
    setEdited(true);
  }

  return (
    <div>
      <h1>Roles</h1>
      <p>Select a role from the dropdown below to manage it.</p>
  
      <div id="roleControls">
        <select onChange={(event) => {selectRole(event.target.value)}} value={JSON.stringify(role)} id="rolesDropdown">
          <option value="-">Select:</option>

          {props.roleList.map((role, index) => {
            return <option key={role.name} value={JSON.stringify(role)}>{role.name}</option>
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
                  <td>{permission.name}</td>
                  <td>{permission.description}</td>
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
        <p>Select a permission and select the plus button to add it to this role.</p>
        <div id="roleControls">
        <select onChange={(event) => setPermission(event.target.value)} value={permission} id="permissionsDropdown">
            <option value="-">Select:</option>
            {
              permissionList.filter(p => {return !permissions.some((el) => {return el.name === p.name})}).map((pname, index) => {
                return <option key={pname.name} value={JSON.stringify(pname)}>{pname.name}</option>
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