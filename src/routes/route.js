const express = require('express');
const router = express.Router();
const lodash=require('lodash')
const underscore=require('underscore')

const xyz=require('../util/helper')
const abc=require('../logger/logger')
const pqr=require('../validater/formatter')

router.get('/test-me', function (req, res) {
   
//---1---//

const arr=["jan","feb","march","april","may","jun","jul","aug","sept","oct","nov","dec"]
   console.log(lodash.chunk(arr,3))

   //----2---//
   const oddarr=[1,3,5,7,9,11,13,15,17,19]
   console.log(lodash.tail(oddarr,8))

//---3---// 
    const num=[1,4,5,5,6,7]
    const num2=[1,24,5,66]
    const num3=[66,77,1,66]
    const num4=[4,88,99,78]
    const num5=[7,56,99,33]
    console.log(lodash.union(num,num2,num3,num4,num5))

 //----4----//
 const cararr=[["sedan","honda city"],["hatchback","ford figo"],["coupe","ford mustang"],["convertible","BMW Z4"] ]  
 console.log(lodash.fromPairs(cararr))
 
 //---logger--//
 console.log(" welcome to my application.I am hariprasad and a part of functionup lithium cohort.")
 
 //---formatter---//
 console.log(nString.trim())
console.log(nString.toUpperCase())
console.log(nString.toLowerCase())

//----helper---//
console.log(day)
console.log(month)
console.log(year)
console.log(`${checkBatch.batch},${checkBatch.day},${checkBatch.topic}`)

    
    res.send('Done with first assignment on nodejs module system ')

});

module.exports = router
