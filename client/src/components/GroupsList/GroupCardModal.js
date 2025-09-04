import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

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

const GroupCardModal = (props) => {
  const { selectedGroup, setIsModalOpen, isModalOpen, setSelectedGroup } =
    props;
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        {selectedGroup && (
          <div>
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s`}
              alt=""
            />
            <h1>{selectedGroup.name}</h1>
            <p>Description:{selectedGroup.description}</p>
            <p>Created at: {selectedGroup.createdAt}</p>
            <p>Updated at: {selectedGroup.updatedAt}</p>

            <button
              onClick={() => {
                setSelectedGroup(false);
                setSelectedGroup(null);
              }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GroupCardModal;
