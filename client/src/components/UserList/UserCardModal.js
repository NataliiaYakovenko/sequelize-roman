import Modal from "react-modal";
import React from "react";

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    button: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UserCardModal = (props) => {
  const { selectedUser, setIsModelOpen, isModelOpen,setSelectedUser } = props;
  return (
    <div>
      <Modal
        isOpen={isModelOpen}
        onRequestClose={() => setIsModelOpen(false)}
        style={customStyles}
      >
        {selectedUser && (
          <div>
            <img
              src={`https://robohash.org/${selectedUser.firstName}-${selectedUser.lastName}?set=set4`}
              alt=""
            />
            <h1>
              {selectedUser.firstName} {selectedUser.lastName}
            </h1>
            <p>Email:{selectedUser.email}</p>
            <p>Gender:{selectedUser.gender}</p>
            <p>Birthday:{selectedUser.birthday}</p>
            <p>Created at: {selectedUser.createdAt}</p>
            <p>Updated at: {selectedUser.updatedAt}</p>

            <button onClick={() => setSelectedUser(false)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserCardModal;
