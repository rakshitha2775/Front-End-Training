function Settings() {

  return (

    <div className="employee-table-container">

      <h2 className="table-title">

        Admin Settings

      </h2>

      <br/>

      <p><b>Admin Name :</b> HR Manager</p>

      <p><b>Email :</b> hr@company.com</p>

      <p><b>Role :</b> Administrator</p>

      <p><b>Version :</b> Employee Management v1.0</p>

      <br/>

      <button className="edit-btn">

        Change Password

      </button>

      &nbsp;

      <button className="delete-btn">

        Logout

      </button>

    </div>

  );
}

export default Settings;