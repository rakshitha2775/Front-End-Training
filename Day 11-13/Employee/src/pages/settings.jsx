import AdminLayout from "../layouts/AdminLayout";

function Settings() {
  return (
    <AdminLayout>
      <h1>Settings</h1>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Application Settings</h3>

        <br />

        <label>Company Name</label>

        <input
          type="text"
          placeholder="ABC Technologies"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        />

        <label>Company Email</label>

        <input
          type="email"
          placeholder="admin@company.com"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <br />
        <br />

        <button
          style={{
            padding: "12px 20px",
            background: "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Save Settings
        </button>
      </div>
    </AdminLayout>
  );
}

export default Settings;