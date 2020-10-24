function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({'formtext': formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.score_tag
    })
}

export { handleSubmit }
