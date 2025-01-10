import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  const handledelete = (id) => {
    if (window.confirm("Do you want remove?")) {
      props.removeuser(id);
      props.loaduser();
      toast.success("user removed successfully..");
    }
  };
  return props.user.loading ? (
    <div>
      <h2>loading....</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/adduser"} className="btn btn-success">
            Add User
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>DOJ</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>

                    <td>
                      {item.doj
                        ? new Date(item.doj).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>{item.salary}</td>
                    <td>{item.isActive ? "Active" : "InActive"}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          handledelete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (id) => dispatch(RemoveUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
