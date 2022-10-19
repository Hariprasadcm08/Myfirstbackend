const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/soln1',function(req,res){
    const num=[1,2,3,5,6,7] 
    const  num1=(num[num.length-1]*(num[num.length-1]+1))/2 //num1=sum of consecutive numbers
    const num2=num.reduce((pre,cur)=>pre+cur) //num2=sum of numbers present in declared array
  // by finding difference between the num1 and num2 we will get the missing number
  const num3=num1-num2
  console.log(num3 )
res.send(`missing num: ${num3}`)
})


router.get('/soln2',function(req,res){
    const arr=[36,37,38,40]
    for(i=0;i<arr.length;i++){
       if(arr[i]+1==arr[i+1])
        continue
       
    else{
        console.log('missing no:',arr[i]+1)  
        const rresult=arr[i]+1
        res.send(`missing no: ${rresult}`)  
          
          break;
        }
    }
})

// router.get('/new',function(req,res){
//     const arr=[1,2,3,4]
//     const arr2=[5,6,7,8]
//     const arr3=arr.reduce((pre,cur)=>pre*cur)
//     const arr4=arr2.reduce((pre,cur)=>pre*cur)
//     const fArr=arr3+arr4
// res.send(`sum of arr: ${fArr}`)
// })



module.exports = router;