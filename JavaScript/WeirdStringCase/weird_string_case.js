# return string with every even index uppercase and every odd index lowercase

function toWeirdCase(str){
  str = str.split(' ');
    for(var i = 0; i < str.length; i++){
        for(var k = 0, arr = str[i].split(''); k < arr.length ; k+=2 ){ // loop by 2's capitalizing
           arr[k]=arr[k].toUpperCase();
        }
        str[i]= arr.join('');
    }
    return str.join(' ');
}