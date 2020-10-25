import { checkForUrl } from '../src/client/js/nameChecker'

test('return true if the input is valid url', async () => {

    // Set up our document body
    let url = 'https://webpack.js.org/';
    expect(checkForUrl(url)).toBe(true);
    
  });
test('return false if the input is invalid url', async () => {

    // Set up our document body
    let url = '://webpack.js.org/';
    expect(checkForUrl(url)).toBe(false);
    
  });
  