var x = 100;
for (x = 100; x <= 200; x++)
{
  if (x % 3 === 0 && x % 4 != 0) {
console.log("Loopy")
  }
  else if (x % 4 === 0 && x % 3 != 0) {
    console.log("Lighthouse")
  }
  else if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse")
  }
 else {console.log(x)};
}  
