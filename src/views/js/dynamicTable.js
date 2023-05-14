import {
  Save,
  Delete,
  Load,
  refreshMonth
} from '../static/js/localStorage.js'
import {
  setDate
} from '../static/js/defineDate.js'

// Set date
let date = setDate()

// Load table
Load(date)

// Refresh month
refreshMonth(date)

// Button to previouse day
document.getElementById('previous').onclick = () => {
  date[0] -= 1
  setDate(date)
  deleteAll()
  Load(date)
}

// Button to next day
document.getElementById('next').onclick = () => {
  date[0] = Number(date[0]) + 1
  setDate(date)
  deleteAll()
  Load(date)
}

// Binding event
document.getElementById('inputSubmit').onclick = addNewRow
// First activation delete buttons
deleteRow()

// Add new row
function addNewRow() {
  // Get inputs
  const activity = validation(document.getElementById('activeInput'))
  const time = validation(document.getElementById('timeInput'))
  const calories = validation(document.getElementById('caloriesInput'))

  const data = {
    'activity': activity.value,
    'time': time.value,
    'calories': calories.value
  }

  renderRow(data)

  Save(date, data)

  // Clear inputs
  activity.value = ''
  time.value = '00:00'
  calories.value = ''
}


// Delete row
function deleteRow() {
  // Get all delete buttons
  let deleteButton = document.getElementsByName('del')
  // Add event listener for each button in loop
  deleteButton.forEach(function (item) {
    item.onclick = function () {
      // Get activity name
      const activity = item.parentNode.parentNode.firstChild
      // Remove TR from Local Storage
      Delete(date[0], activity.innerHTML)

      // Remove TR from tbody 
      // delete button > TD > TR > tbody
      item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)
    }
  })
}


function deleteAll() {
  // Delete all rows
  let tbody = document.getElementById('diary')
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}


// Validation and coloring input zone in error case
function validation(element) {
  // Coloring input
  if (!element.value) {
    element.classList.add('error')
  }
  // Uncoloring input
  if (element.value && element.classList.contains('error')) {
    element.classList.remove('error')
  }

  return element
}

export function renderRow(data) {
  // General validation
  if (!data.activity || !data.time || !data.calories) {
    return
  }

  // Create TR
  let newRow = document.createElement('tr')

  // Create TDs
  let activityCol = document.createElement('td')
  let timeCol = document.createElement('td')
  let caloriesCol = document.createElement('td')
  let settingsCol = document.createElement('td')


  // Filling TDs
  activityCol.innerHTML = data.activity
  timeCol.innerHTML = data.time
  caloriesCol.innerHTML = data.calories
  settingsCol.classList.add('settings')

  // Create delete button
  let settingsBtn = document.createElement('input')
  settingsBtn.value = 'видалити'
  settingsBtn.type = 'button'
  settingsBtn.name = 'del'

  // Put delete button into TD
  settingsCol.appendChild(settingsBtn)

  // Put TDs into TR
  newRow.appendChild(activityCol)
  newRow.appendChild(timeCol)
  newRow.appendChild(caloriesCol)
  newRow.appendChild(settingsCol)

  // Get table
  let table = document.getElementById('diary')
  // Put new row into table
  table.appendChild(newRow)

  // Activation new delete button
  deleteRow()
}