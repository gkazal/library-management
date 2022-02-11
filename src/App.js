import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login/Login";
import BookRequest from "./Components/Home/BookRequest/BookRequest";
import Dashboard from "./Components/Home/Dashboard/Dashboard";
import ManageBook from "./Components/Home/ManageBook/ManageBook";
import BorrowDetails from "./Components/Home/ManageBorrower/BorrowDetails";
import ManageBorrower from "./Components/Home/ManageBorrower/ManageBorrower";
import MangeStudent from "./Components/Home/ManageStudent/MangeStudent";
import StudentDetails from "./Components/Home/ManageStudent/StudentDetails";
import BorrowHistory from "./Components/Home/StudentDashboard/BorrowHistory/BorrowHistory";
import StudentDashboard from "./Components/Home/StudentDashboard/StudentDashboard";
import StudentProfile from "./Components/Home/StudentDashboard/StudentProfile";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:5500/settings/departments", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/bookRequest" component={BookRequest} />
        <Route exact path="/manageStudent" component={MangeStudent} />
        <Route exact path="/studentDetails" component={StudentDetails} />
        <Route exact path="/manageBorrower" component={ManageBorrower} />
        <Route exact path="/borrowDetails" component={BorrowDetails} />
        <Route exact path="/manageBook" component={ManageBook} />
        <Route exact path="/student" component={StudentDashboard} />
        <Route exact path="/student/borrowHistory" component={BorrowHistory} />
        <Route exact path="/student/profile" component={StudentProfile} />
      </Switch>
    </Router>
  );
}

export default App;
