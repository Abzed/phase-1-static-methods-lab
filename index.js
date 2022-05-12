class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-'\- ]+/g,'');
  }

  static titleize(string){
    const arr = string.split(' ')
    const prep = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < arr.length; i++) {
      if (!prep.includes(arr[i])) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
    }
    let x = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    let newArr = arr.slice(1).join(' ')
    return x + ' ' + newArr
  }
}

console.log(Formatter.titleize('the name, the name of a guy of me from.'));