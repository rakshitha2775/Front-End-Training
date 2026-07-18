import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function EmployeeLayout({ children }) {
  return (
    <>
      <Sidebar role="employee" />

      <Navbar />

      <div
        style={{
          marginLeft: "250px",
          padding: "30px",
          marginTop: "75px",
          background: "#F1F5F9",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default EmployeeLayout;