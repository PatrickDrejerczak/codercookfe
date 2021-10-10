import React, { useEffect } from "react";
import { authActions } from "../../redux/actions/auth.action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Table, Button } from "react-bootstrap";
import "./AdminOptions.css";
import CreateUserModal from "../CreateUserModal/CreateUserModal";
import UpdateUserModal from "../UpdateUserModal/UpdateUserModal";

const AdminUser = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const handleDelete = (index) => {
    dispatch(authActions.deleteUser({ userId: users[index]._id }));
    console.log("testfrontend", users[index]._id);
  };

  const handleUpdate = (index) => {
    dispatch(authActions.getUserById({ userId: users[index]._id }));
    setModalShow(true);
    console.log("testfrontend", users[index]._id);
  };

  const handleSignUp = () => {
    setModalShow(true);
  };

  useEffect(() => {
    dispatch(authActions.getAllUser());
  }, [dispatch]);

  return (
    <div className="row-wrapper">
      <Row>
        <h1>User</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="kopf">Users</th>
            </tr>
          </thead>
          <tbody>
            {users?.length ? (
              users.map((users, index) => (
                <tr>
                  <div>
                    <td className="reihe">
                      {users.name} {users._id}
                      <div className="adminButton">
                        <Button
                          variant="success"
                          className="adminPress"
                          onClick={() => handleUpdate(index)}
                        >
                          <UpdateUserModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          Edit
                        </Button>
                        <Button
                          variant="success"
                          className="adminPress"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </div>
                </tr>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </tbody>
        </Table>

        <div>
          <Button
            variant="success"
            className="adminPress"
            onClick={handleSignUp}
          >
            {" "}
            <CreateUserModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            + New User
          </Button>{" "}
        </div>
        <br />
      </Row>
    </div>
  );
};

export default AdminUser;
