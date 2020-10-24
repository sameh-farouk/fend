function handleSubmit(event) {
    event.preventDefault()
    let score_tag = {
        'P+': 'strong positive',
        'P': 'positive',
        'NEU': 'neutral',
        'N': 'negative',
        'N+': 'strong negative',
        'NONE': 'without sentiment'
    }
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForUrl(formText)) {
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
            document.getElementById('results').innerHTML = score_tag[res.score_tag]
        })
    }

    
}

export { handleSubmit }
