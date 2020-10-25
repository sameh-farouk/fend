export function main() {
    function nlp(event) {
        event.preventDefault();
        let formText = document.getElementById('name').value
        if (Client.checkForUrl(formText)) {
            Client.handleSubmit(formText)
        } else {
            alert("please enter a correct URL");
        }
    }
    document.getElementById("url-form").addEventListener('submit', nlp); 
}