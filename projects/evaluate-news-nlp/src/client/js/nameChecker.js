function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    var expression = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
    var regex = new RegExp(expression);


    if (inputText.match(regex)) {
        return true;
      } else {
        return false;
      }
      
}

export { checkForUrl }
