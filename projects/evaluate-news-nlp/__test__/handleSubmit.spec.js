import { handleSubmit } from '../src/client/js/formHandler'

test('displays a score tag after form submit', async () => {

    // Set up our document body
    document.body.innerHTML = `<div id="results"></div>`;
    let url = 'https://webpack.js.org/';
    fetch.mockIf(/^https?:\/\/api.meaningcloud.com.*$/, req => {
        return "{score_tag: 'P'}"
    });
    await handleSubmit(url);
    expect(document.getElementById("results").innerText).toEqual('positive');
    
  });
  
  