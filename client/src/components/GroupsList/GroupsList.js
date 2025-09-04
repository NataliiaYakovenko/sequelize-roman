import React, { useState, useEffect } from "react";
import { getAllGroups } from "../../api";
import GroupCard from "./GroupCard";
import GroupCardModal from "./GroupCardModal";

const GroupsList = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); //Модалка перегляду групи
  const [isModalAddOpen, setIsModalAddOpen] = useState(false); // Модалка додавання групи

  const loadGroups = () => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadGroups();
  }, []);

  const renderGroups = () => {
    return groups.map((group) => (
      <GroupCard
        group={group}
        key={group.id}
        onClick={() => {
          setSelectedGroup(group);
          setIsModalOpen(true);
        }}
      />
    ));
  };

  return (
    <>
      <h1>Groups List</h1>

      {isLoading && <h2 className="loading">Loading...</h2>}

      <section className="card-wrapper">
        {groups.length > 0 && isLoading === false ? (
          renderGroups()
        ) : (
          <h2 className="error"> Groups not found</h2>
        )}
      </section>

      <GroupCardModal //Модальні вікна
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />
    </>
  );
};

export default GroupsList;
