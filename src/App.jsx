import { useState} from 'react'
import './App.css'
import { nanoid } from 'nanoid'

import UserList from './components/UserList'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, addUser, changeSearchValue, resetUsers } from "./redux/userSlice";
import SearchUsers from "./components/SearchUsers/SearchUsers"

function App() {
const dispatch = useDispatch()

  const [isShowModal, setIsShowModal] = useState(false)

  const users = useSelector(state => state.users.users)
  const search = useSelector(state => state.users.searchValue)
  console.log(users)
const filterUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()),
);

  const handleToggleModal = () => {
    setIsShowModal(prev => !prev)
  }

  const handleDelete = (userID) => {
    const message = window.confirm("do u really want to delete this user?")
    if(message){
      dispatch(deleteUser(userID));
    }
    
  }
  const handleReset = ()=>{
    dispatch(resetUsers())
  }

  const handleAddUser = (newUser) => {
  const user = {
    id: nanoid(),
    name: newUser.name,
    age: Number(newUser.age),
    email: newUser.email,
    isActive: true,
  }

    dispatch(addUser(user));
}

  return (
    <>
      <button type='button' onClick={handleReset} className='reset'>reset</button>
      <Button onOpen={handleToggleModal} />

      <SearchUsers />
      <p>number of contacts: {users.length}</p>
      <UserList users={filterUsers} onDelete={handleDelete} />

      {isShowModal && (
        <Modal onAddUser={handleAddUser} onClose={handleToggleModal} />
      )}
    </>
  );
}

export default App
