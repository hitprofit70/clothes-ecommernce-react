import {USER_TABLE, CURRENT_USER} from './constant'

// check if localstorage exist
const storage_exists = (key) => (localStorage.getItem(key) ? true : false)

// read from local storage
const read_fromStorage = (key) => JSON.parse(localStorage.getItem(key))

// save into local storage
const save_toLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

// check if email exists in the local storage
const check_emailInStorage = (email) => {
  let userTable = read_fromStorage(USER_TABLE)

  const response = userTable.filter((storedData) => storedData.email === email)

  return response.length > 0 ? true : false
}

export {
  storage_exists,
  read_fromStorage,
  save_toLocalStorage,
  check_emailInStorage,
}