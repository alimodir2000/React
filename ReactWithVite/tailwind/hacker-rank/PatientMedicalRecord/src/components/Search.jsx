import React, { useState } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {
  const users = getUsers();
  const [selectedUserId, setSelectedUserId] = useState(0);

  function getUsers() {
    const allUsers = medical_records.flatMap((item) => {
      return item.data.map((itemdata) => {
        return {
          userid: itemdata.userId,
          username: itemdata.userName,
        };
      });
    });

    const distinctUsers = Array.from(
      new Map(allUsers.map((user) => [user.userid, user])).values()
    );

    return distinctUsers;
  }

  function getUserRecords(id) {
    if (id === 0) return;
    return medical_records.filter((x) => Number(x.id) === Number(id))[0].data;
  }

  function handleButtonClick() {
    setRecord(getUserRecords(selectedUserId));
    setId(selectedUserId);
  }

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select
          data-testid="patient-name"
          defaultValue="0"
          onChange={(event) => setSelectedUserId(Number(event.target.value))}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.userid}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleButtonClick}>
        Show
      </button>
    </div>
  );
}

export default Search;
