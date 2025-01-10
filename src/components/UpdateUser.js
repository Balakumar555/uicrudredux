import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
  const [id, idchange] = useState(0);
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phoneNumber, phoneNumberchange] = useState("");
  const [designation, designationchange] = useState("");
  const [doj, dojchange] = useState("");
  const [salary, salarychange] = useState("");
  const userobj = useSelector((state) => state.user.userobj);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = {id, name, email, phoneNumber, designation, doj, salary };
    dispatch(FunctionUpdateUser(userobj));
    navigate("/userlisting");
  };
  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      idchange(userobj.id);
      namechange(userobj.name);
      emailchange(userobj.email);
      phoneNumberchange(userobj.phoneNumber);
      designationchange(userobj.designation);
      dojchange(userobj.doj);
      salarychange(userobj.salary);
    }
  }, [userobj]);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Update User Details</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={id || ""}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name || ""}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email || ""}
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    value={phoneNumber || ""}
                    onChange={(e) => phoneNumberchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    value={designation || ""}
                    onChange={(e) => designationchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label>Date of Joining</label>
                  <input
                    type="date"
                    value={doj || ""}
                    onChange={(e) => dojchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Salary</label>
                  <input
                    value={salary || ""}
                    onChange={(e) => salarychange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Update
            </button>{" "}
            
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateUser;
