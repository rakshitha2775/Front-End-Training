import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/css/Layout.css";

function AdminLayout({ children }) {
  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="main-container">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;