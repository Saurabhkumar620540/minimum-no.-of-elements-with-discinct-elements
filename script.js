const subBtn = document.getElementById('submit')
const expBtn = document.getElementById('explanation')
// onclick="document.write(subset(arr, arr.length))

subBtn.addEventListener('click', () => {
    const sz = document.getElementById('noofels')
    const els = document.getElementById('els')
    let arr = els.value.split(' ').map(strDigit => { return parseInt(strDigit) })
    let size = parseInt(sz.value)
    // console.log("Array :");
    // console.log(arr);
    // console.log("Size :");
    // console.log(size);
    document.getElementById("explanationP").innerHTML=arr;
    document.getElementById("answer").innerHTML="The minimum number of subset with distinct elements is: "+ subset(arr, arr.length);

})
// expBtn.addEventListener('click',()=>{
//     myFunction()
//     let arr = els.value.split(' ').map(strDigit => { return parseInt(strDigit) })
//     let r = ''
//     for (let v of subsetFind(arr)) {
//         r+='{'
//         for (let x of v) {
//             r += ' ' +x + ' '
//         }
//         r+='}'
//     }
//     document.getElementById("subsetDiv").innerHTML=r;
//     document.getElementById("explanationP").innerHTML=arr;

// });
expBtn.addEventListener('click',async ()=>{
    myFunction()
    document.getElementById("explanation").disabled=true;
    
    const el=document.getElementById("subsetDiv")
    el.innerHTML=''
    const len=Number.parseInt(document.getElementById('noofels').value)
    let arr = els.value.split(' ').map(strDigit => { return parseInt(strDigit) }).slice(0,len)
    let r = ''
    document.getElementById("explanationP").innerHTML=arr;

    for (let v of subsetFind(arr)) {
        r='{'
        await new Promise((res,rej)=>{
            setTimeout(() => {
                el.innerHTML=el.innerHTML+r
                res()
            }, 1000);
        })
        for (let x of v) {
            await new Promise((res,rej)=>{
                setTimeout(() => {
                    el.innerHTML=el.innerHTML+' ' +x + ' '
                    res()
                }, 1000);
            })
        }
        await new Promise((res,rej)=>{
            setTimeout(() => {
                el.innerHTML=el.innerHTML+' }'
                res()
            }, 1000);
        })
    }

});
        function subset(arr, n) {
        var mp = {};
        for (var i = 0; i < n; i++) {
          if (mp.hasOwnProperty(arr[i])) {
            var val = mp[arr[i]];
            delete mp[arr[i]];
            mp[arr[i]] = val + 1;
          } else {
            mp[arr[i]] = 1;
          }
        }
        var res = 0;
        for (const [key, value] of Object.entries(mp)) {
          res = Math.max(res, value);
        }
        return res;
      }
    //   function subset(arr, n)
    // {
    //     let res = 0;
    //     // Sort the array
    //     arr.sort();
    //     // Traverse the input array and
    //     // find maximum frequency
    //     for (let i = 0; i < n; i++)
    //     {
    //         let count = 1;
    //         // For each number find its repetition / frequency
    //         for (; i < n - 1; i++)
    //         {
    //             if (arr[i] == ar[i + 1])
    //                 count++;
    //             else
    //                 break;
    //         }
    //         // Update res
    //         res = Math.max(res, count);
    //     }
    //     return res;
    // }
 
        // var arr = [];
        // var size = prompt("Enter no of elements: ");
        // for(var i=0; i<size; i++) {
	    //     arr[i] = prompt('Enter Element ' + (i+1));
        //     document.getElementById("explanationP").innerHTML=arr;
        // }
        // var n = arr.length;
        
        // div hide
        function myFunction() {
            const x = document.getElementById("explanationDiv");
            x.classList.toggle("hidden")
        }


        function subsetFind(arr) {
          // Traverse the input array and
          // store frequencies of elements
          let mp = new Map();
          let ttl = -1;
      
          arr.forEach(element => {
              if (!mp[element])
                  mp[element] = 1;
              else
                  mp[element]++;
              if (mp[element] > ttl)
                  ttl = mp[element];
          });
      
      
          // Find the maximum value in map.
          let res = new Array()
          for (let i = 0; i < ttl; i++)
              res[i] = []
          for (let i = 0; i < ttl; i++) {
              for (let entry of Object.entries(mp)) {
                  if (entry[1] != 0) {
                      res[i].push(entry[0]);
                      mp[entry[0]]--;
                  }
              }
          }
      
          return res;
      }
      // Driver code
      function main() {
          let arr = [5, 6, 9, 3, 4, 3, 4];
          for (let v of subsetFind(arr)) {
              let r = ''
              for (let x of v) {
                  r += x + ' '
              }
              console.log(r);
              document.getElementById("subsetDiv").innerHTML=r;
          }
          return 0;
      }