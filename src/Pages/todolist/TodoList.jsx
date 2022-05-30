import React, { useState, useEffect } from 'react'
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc,
  getFirestore,
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/contexts/AuthContext'
import '../../components/Tailwind.css'
// import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({ setUser }) => {
  const cancel = <FontAwesomeIcon icon={faXmark} />
  const deleteIcon = <FontAwesomeIcon icon={faTrashCan} />
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState([])
  const [completedTasks, setCompletedTasks] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const db = getFirestore()
  let navigate = useNavigate()
  const { currentUser, logOut } = useAuth()
  const [isCompleted, setIsCompleted] = useState(false)
  const colRef = collection(db, 'todos')
  const [curr, setCurr] = useState(task.date)

  // Function to get time and date

  useEffect(() => {
    const q = query(
      collection(db, 'todos'),
      where('user', '==', currentUser.uid),
      orderBy('createdAt', 'desc'),
    )
    onSnapshot(q, (snapshot) => {
      let list = []
      snapshot.docs.forEach((doc) => {
        list.push({
          ...doc.data(),
          id: doc.id,
          completed: doc.data().completed,
          date: doc.data().createdAt,
        })
      })
      setTasks([...list])
    })
  }, [])
  useEffect(() => {
    const q = query(
      collection(db, 'todos'),
      where('user', '==', currentUser.uid),
      where('completed', '==', true),
    )
    onSnapshot(q, (snapshot) => {
      let list = []
      snapshot.docs.forEach((doc) => {
        list.push({
          ...doc.data(),
          id: doc.id,
          completed: doc.data().completed,
        })
      })
      setCompletedTasks([...list].length)
    })
  }, [])

  useEffect(() => {
    let newDate = new Date(date.seconds * 1000)
    console.log(date)
    var day = newDate.getDate()
    var month = newDate.getMonth()
    var year = newDate.getFullYear()
    setCurr(day + '/' + month + '/' + year)
    console.log(curr)
  }, [])
  const handleClick = () => {
    addDoc(colRef, {
      Todo: task,
      createdAt: serverTimestamp(),
      user: currentUser.uid,
      completed: false,
    })
    setTask('')
  }

  const removeItem = (id) => {
    const docRef = doc(db, 'todos', id)
    deleteDoc(docRef)
  }
  const [selectedId, setSelectedId] = useState(null)
  const [newValue, setNewValue] = useState('')
  const handleEdit = (id) => {
    setSelectedId(id)
    if (newValue === '') {
    } else {
      const docRef = doc(db, 'todos', id)
      updateDoc(docRef, {
        Todo: newValue,
      })
      setIsCompleted(!isCompleted)
      setNewValue('')
    }
  }

  const checkHandler = async (task, ids) => {
    setSelectedId(ids)

    getDoc(doc(db, 'todos', task.id)).then((res) => {
      if (res) {
        let response = res.ref
        return updateDoc(response, { completed: !res.data().completed })
      }
    })
  }

  const q = query(colRef, orderBy('createdAt'))
  const logout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch {}
  }

  return (
    <div className="full-todos">
      <ul className={`todolist   foredit ${isCompleted ? 'foredit' : 'fornone'}`}>
        {tasks.map((task) => {
          {
            if (selectedId === task.id) {
              return (
                <div>
                  <div
                    className="cancel"
                    onClick={() => {
                      handleEdit(task.id)
                      setIsCompleted(!isCompleted)
                    }}
                  >
                    {cancel}
                  </div>

                  <div className=" todolists newlists ">
                    <form
                      action=""
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleEdit(task.id)
                        setIsCompleted(!isCompleted)
                      }}
                    >
                      <input
                        className="editInput"
                        type="text"
                        onChange={(e) => {
                          setNewValue(e.target.value)
                        }}
                        name=""
                        placeholder="Enter the new Task here"
                        value={newValue}
                        id=""
                      />
                    </form>

                    <button
                      className=""
                      type="button"
                      onClick={() => {
                        handleEdit(task.id)
                        setIsCompleted(!isCompleted)
                      }}
                    >
                      {editIcon}
                    </button>
                  </div>
                </div>
              )
            }
          }
        })}
      </ul>
      <div className={` TodoList ${isCompleted ? 'blur' : ''}`}>
        <div className=" inner-todo">
          <form
            className="w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault()
              handleClick()
            }}
          >
            <h1 className="welcome">Welcome</h1>
            <div className="form flex items-center border-b border-teal-500 py-2 ">
              <div>
                <input
                  className="task-input "
                  type="text"
                  value={task}
                  placeholder="Tasks to do"
                  maxLength={20}
                  aria-label="Full name"
                  onChange={(e) => {
                    setTask(e.target.value)
                  }}
                />
                <button
                  className="add-task"
                  type="button"
                  onClick={handleClick}
                  disabled={task === ''}
                >
                  Add Task
                </button>
              </div>

              <h2 className="completedtasks">Tasks Completed: {completedTasks} </h2>
            </div>
          </form>
          <ul className="todolist">
            {tasks.map((task) => {
              return (
                <div className={` todolists ${task.completed ? 'dim' : ''}`}>
                  <div className="todo-items">
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      onClick={() => {
                        var ids = task.id
                        checkHandler(task, ids)
                      }}
                    />
                    <div className="list">
                      <li className={`todo-item  ${task.completed ? 'strike' : ''}`}>
                        {' '}
                        {task.Todo}{' '}
                      </li>
                    </div>


                    <div className="icons">
                      <button
                        className="remove"
                        type="button"
                        onClick={() => {
                          removeItem(task.id)
                        }}
                      >
                        {deleteIcon}
                      </button>
                      <button
                        className=""
                        type="button"
                        onClick={() => {
                          handleEdit(task.id)
                          setIsCompleted(!isCompleted)
                        }}
                      >
                        {editIcon}
                      </button>
                    </div>
                    <div className={`status ${task.completed ? 'completed ' : 'uncompleted'}`}>
                      <i>{task.completed ? 'completed' : 'uncompleted'}</i>
                    </div>
                  </div>
                </div>
              )
            })}
          </ul>

          <button className="add-task logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
