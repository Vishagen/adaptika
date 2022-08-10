import { useState } from 'react';

function Users(props) {

  const [user, setUser] = useState("");
  const [edited, setEdited] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    serverID: "",
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    role: "",
    verified: "",
    admin: "",
  });
  const [userLoaded, setUserLoaded] = useState(false);

  function loadUser() { 
    // setUserData({
    //   username: "a",
    //   serverID: "Freemium",
    //   email: "testtest@gmail.com",
    //   displayName: "qqqqq",
    //   firstName: "Ella",
    //   lastName: "Reef",
    //   role: "LiveStudent",
    //   verified: "true",
    //   admin: "false",
    // });

    const data = localStorage.getItem(`user:${user}`);
    if (data) {
      setUserData(JSON.parse(data));
    }
    else {
      alert("No user.")
      return;
    }

    setUserLoaded(true);
    setEdited(false);
  }

  function editProperty(key, value) {
    setUserData({
      ...userData,
      [key]: value,
    });
    setEdited(true);
    console.log(`Editing property ${key} to ${value}`);
  }

  function saveUser() {
    localStorage.setItem(`user:${user}`, JSON.stringify(userData));
    setEdited(false);
  }

  return (
    <div>
      <div className="usersBar">
        <h1>Users</h1>
        <button onClick={() => props.handleTabClick('import')} className="btn addUsersButton">
          <i className="bx bx-plus"></i>
          Import Users
        </button>
      </div>
      <p>Enter the username or email address of the user you would like to check: {user}</p>
  
      <div className="form">
        <input onKeyUp={(event) => {
          if (event.key === 'Enter') {
            loadUser();
          }
          else {
            setUser(event.target.value);
          }
        }} id="userCheckInput" autoComplete='off' className="input" type="text" name="username" placeholder="Username / Email" />
        <input onClick={() => {loadUser()}} className="btn" type="submit" value="Check" />
      </div>
  
      <div id="results1" className={userLoaded ? '' : 'hidden'}>
        <h2>Results</h2>
  
        <table>
          <tbody>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Username</td>
              <td id="usernameField">{userData.username}</td>
            </tr>
            <tr>
              <td>Server ID {userData.serverID}</td>
              <td>
                <select onChange={(event) => editProperty("serverID", event.target.value)} value={userData.serverID} name="" id="serverIDDropdown">
                  <option value="LIVEDEMO">LIVEDEMO</option>
                  <option value="Freemium">Freemium</option>
                  <option value="OHH">OHH</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>Unknown</td>
            </tr>
            <tr>
              <td>Email</td>
              <td className="editable">
                <input value={userData.email} onChange={(event) => editProperty("email", event.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>Display Name</td>
              <td className="editable">
                <input value={userData.displayName} onChange={(event) => editProperty("displayName", event.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>First Name</td>
              <td className="editable">
                <input value={userData.firstName} onChange={(event) => editProperty("firstName", event.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td className="editable">
                <input value={userData.lastName} onChange={(event) => editProperty("lastName", event.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <select onChange={(event) => editProperty("role", event.target.value)} value={userData.role} name="" id="roleDropdown">
                  <option value="LiveStudent">LiveStudent</option>
                  <option value="LiveAdmin">LiveAdmin</option>
                  <option value="">Etc</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Verified</td>
              <td>
                <select onChange={(event) => editProperty("verified", event.target.value)} value={userData.verified} name="" id="roleDropdown">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>
                <select onChange={(event) => editProperty("admin", event.target.value)} value={userData.admin} name="" id="roleDropdown">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={() => saveUser()} className={edited ? `btn` : `btn disabled`}>Save Changes</button>
      </div>
    </div>
  );
}

export default Users;