async function handleSubmit(url) {
    let score_tag = {
        'P+': 'strong positive',
        'P': 'positive',
        'NEU': 'neutral',
        'N': 'negative',
        'N+': 'strong negative',
        'NONE': 'without sentiment'
    }
    console.log("::: Form Submitted :::")
    await fetch('http://localhost:8081/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        body: JSON.stringify({'formtext': url})
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {
        document.getElementById('results').innerText = score_tag[res.score_tag];
    }).catch((err)=> console.log(err));
}

export { handleSubmit }
