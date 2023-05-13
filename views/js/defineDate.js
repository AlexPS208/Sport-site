function isLeap(year) {
    return (new Date(year, 2, 0)).getDate() == 29
}

function isLastDayOfMonth(day, month, year) {
    const longMonthes = ['01', '03', '05', '07', '08', '10', '12']
    const shortMonthes = ['04', '06', '09', '11']
    const february = '02'

    if ((longMonthes.includes(month) && day !== '31') ||
        (shortMonthes.includes(month) && day !== '30') ||
        (month === february && isLeap(year) && day !== '29') ||
        (month === february && !isLeap(year) && day !== '28')) return true

    return false
}

export function defineTomorrow(day, month, year) {
    let date
    if (arguments.length === 3) {
        date = new Date(Number(year), Number(month) - 1, Number(day) + 1)
    } else {
        date = new Date()
    }

    // Return date in format [DD, MM, YYYY]
    return date.toISOString().slice(0, 10).split('-').reverse()
}

export function buttonsRender(date) {
    const day = date[0]
    const month = date[1]
    const year = date[2]

    let previous = document.getElementById('previous')
    let next = document.getElementById('next')

    // Render previous button
    if (day !== '01') {
        previous.style.visibility = 'visible'
    } else {
        previous.style.visibility = 'hidden'
    }
    // Render next button
    if (isLastDayOfMonth(day, month, year)) {
        next.style.visibility = 'visible'
    } else {
        next.style.visibility = 'hidden'
    }
}

export function setDate(date) {
    let tomorrow
    if (arguments.length > 0) {
        tomorrow = defineTomorrow(date[0], date[1], date[2])
    } else {
        tomorrow = defineTomorrow()
    }

    let label = document.getElementById('label')
    label.innerHTML = 'Моя активність за ' + tomorrow.join('.')

    buttonsRender(tomorrow)
    return tomorrow
}