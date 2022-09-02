import { useEffect, useState } from "react";
import TimeAgo from 'react-timeago'

function Audit() {

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/adaptika/actionloglist`).then(async (response) => {
      const data = await response.json();
      setAuditLogs(data.reverse());
    })
  }, [])

  const [auditLogs, setAuditLogs] = useState([])

  function loadMoreLogs() {
    
  }

  return (
    <div>
      <h1>Audit Logs</h1>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {
            auditLogs.map((auditLog, index) => {
              return (
                <tr key={index}>
                  <td>{auditLog.username}</td>
                  <td title="">
                    <TimeAgo date={new Date(auditLog.date_time)}></TimeAgo>
                  </td>
                  <td>{auditLog.action.substring(0, 1).toUpperCase()}{auditLog.action.substring(1, auditLog.action.length).toLowerCase()}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <button onClick={loadMoreLogs()}>Load more</button>

    </div>
  );
}

export default Audit;