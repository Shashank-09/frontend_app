import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Search from "./Search";
import './App.css';
import DomainFilter from "./DomainFilter";
import Team from "./Team";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 1000));
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomains, setSelectedDomains] = useState([]); 
  const [selectedUsers, setSelectedUsers] = useState([]); 

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredUsers = JsonData.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filteredUsers.slice(0, 1000)); 
  };

  
  const handleDomainChange = (selectedDomains) => {
    setSelectedDomains(selectedDomains);
    // Perform filtering based on selected domains
    const filteredUsers = JsonData.filter(user => selectedDomains.includes(user.domain));
    setUsers(filteredUsers);
  };

  
  const addToTeam = (user) => {
   
    const isUnique = !selectedUsers.some(
      (selectedUser) =>
        selectedUser.domain === user.domain && selectedUser.available === user.available
    );

    if (isUnique) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      
      alert("This user cannot be added to the team. Domain and availability must be unique.");
    }
  };

  
  const removeFromTeam = (userToRemove) => {
    const updatedTeam = selectedUsers.filter(
      (user) => !(user.domain === userToRemove.domain && user.available === userToRemove.available)
    );
    setSelectedUsers(updatedTeam);
  };

  

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, ind) => {
      return (
        <div className="user" key={ind}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}'s avatar`} />
          <h3>FirstName: {user.first_name}</h3>
          <h3>LastName: {user.last_name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Domain: {user.domain}</h3>
          <h3>{user.available}</h3>
          <button onClick={() => addToTeam(user)}>Add to Team</button>
        </div>
      );
    });

  

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <DomainFilter handleDomainChange={handleDomainChange} />
      <Search handleSearch={handleSearch} />
      <Team selectedUsers={selectedUsers} removeFromTeam={removeFromTeam} />

      <div className="App">
        <h2>Users</h2>
        <div className="user-container">
          {displayUsers}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>

    </>
  );
}

export default App;
