module.exports = {
    getTeams: getTeams,
}

function getTeams() {
    return fetch('/teams')
        .then((data) => data.json())
        .then((res) => res)
        .catch(console.log)
}
