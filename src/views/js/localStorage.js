import {
    renderRow
} from "../static/js/dynamicTable.js"

// Local Storage structure:
// {
//     day(number): {
//         activity(string): {
//             time: number,
//             callories: number
//         }
//     }
// }

export function Save(date, data) {
    // Get old data
    let oldData = localStorage.getItem(Number(date[0]))

    // If data is empty
    if (oldData) {
        oldData = JSON.parse(oldData)
    }

    // Refresh data
    if (!oldData) {
        oldData = {}
    }
    if (!oldData.hasOwnProperty(data.activity)) {
        oldData[data.activity] = {}
    }

    oldData[data.activity].time = data.time
    oldData[data.activity].calories = data.calories

    // Save it
    localStorage.setItem(Number(date[0]), JSON.stringify(oldData))
    localStorage.month = date[1]
    localStorage.year = date[2]
}


export function Delete(day, activity) {
    // Get old data
    let oldData = localStorage.getItem(Number(day))

    // If data is empty
    if (!oldData) {
        return
    } else {
        oldData = JSON.parse(oldData)
    }

    // Refresh data
    delete oldData[activity]

    // Save it
    localStorage.setItem(Number(day), JSON.stringify(oldData))
}


export function Load(date) {
    // Let today data
    let data = localStorage[date[0]]

    // If data is empty
    if (!data) {
        return
    } else {
        data = JSON.parse(data)
    }

    // Render every row
    for (let activity in data) {
        const renderData = {
            'activity': activity,
            'time': data[activity].time,
            'calories': data[activity].calories
        }
        renderRow(renderData)
    }
}

export function refreshMonth(date) {
    if (localStorage.month && localStorage.year) {
        if (date[1] !== localStorage.month || date[2] !== localStorage.year) {
            let deleteButton = document.getElementsByName('del')
            deleteButton.forEach(function (item) {
                item.click()
            })
        }
        localStorage.clear()
    }
}