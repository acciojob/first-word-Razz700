function firstWord(s) {
  // your code here
	 s=s.trim();
  console.log(s);
  let str="";
  for(let i=0;i<s.length;i++){
      str+=s[i];
      if(s[i]==" " || i==s.length-1){
          str=str.trim();
          return str;
      }
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
