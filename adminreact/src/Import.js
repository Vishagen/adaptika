import { useState } from 'react';

function Import() {

  const [registerServerID, setRegisterServerID] = useState("");
  const [roleServerID, setRoleServerID] = useState("");

  function registerAccountsFile() {
    console.log(registerServerID)

    const a = document.createElement('input');
    a.type = 'file';
    a.onchange = function() {
      const file = a.files[0];
      console.log(file)
    }
    a.click();
  }

  function unverifyAccountsFile() {

  }

  function changeRoleFile() {
    console.log(roleServerID)

    const a = document.createElement('input');
    a.type = 'file';
    a.onchange = function() {
      const file = a.files[0];
      console.log(file)
    }
    a.click();
  }

  return (
    <div>
      <h1>Import Users</h1>
      <p>Import users via a CSV file.</p>
  
      <h2>Register Accounts</h2>
      <select className='csvDropdowns' onChange={(event) => setRegisterServerID(event.target.value)} value={registerServerID}>
        <option value="">-- Select Server: --</option>
        <option value="LIVEDEMO">LIVEDEMO</option>
        <option value="Freemium">Freemium</option>
        <option value="OHH">OHH</option>
      </select>
  
      <br /><br />
      <button className="btn importButton" onClick={() => registerAccountsFile()}>Import File</button>
  
      <h2>Unverify Accounts</h2>
      <button className="btn importButton" onClick={() => unverifyAccountsFile()}>Import File</button>
  
      <h2>Change Role</h2>
      <select className='csvDropdowns' onChange={(event) => setRoleServerID(event.target.value)} value={roleServerID}>
        <option value="">-- Select Server: --</option>
        <option value="LIVEDEMO">LIVEDEMO</option>
        <option value="Freemium">Freemium</option>
        <option value="OHH">OHH</option>
      </select>
  
      <br /><br />
      <button className="btn importButton" onClick={() => changeRoleFile()}>Import File</button>
    </div>
  );
}

export default Import;