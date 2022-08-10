function Audit() {
  return (
    <div>
      <h1>Audit Logs</h1>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Admin</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>A</td>
            <td>2020-11-02 15:45:11</td>
            <td>
              Updated the server ID of TEST@EMAIL.COM to 11 (OHH Campus)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Audit;