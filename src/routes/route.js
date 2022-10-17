const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


//-----1----//

    let myArray = ["KGF","Kantara","kranti","Bahubali","Raghuvaran B.tech"]

  router.get('/Movies', function (req, res) {
   res.send(myArray)
})

//------2------//
router.get('/Movies/:indexNumber',(req,res)=>{
         let index = req.params.indexNumber  
         res.send(myArray[index])
     })

     //-------3------//
     router.get('/edgeCase/:y',function(req,res){
        let movies = ["KGF","Kantara","kranti","Bahubali","Raghuvaran B.tech"]
        let myParams = req.params
        if(myParams.y<movies.length)
        {
            res.send('movie name: ' + movies[myParams.y])
        }
        else
        {
           res.send("use a valid index")
        }
    
    })
    
    //-------4------//
    router.get('/GET/films',function(req,res){
        let array=[ {
            "id": 1,
            "name": "KGF"
           }, {
            "id": 2,
            "name": "KANTARA"
           }, {
            "id": 3,
            "name": "KRANTI"
           }, {
            "id": 4,
            "name": "BAHUBALI"
           }]
           res.send(array)
        })

        //--------5--------//
        router.get( '/GET/films/:filmId',function(req,res){
            let array=[ {
                "id": 1,
                "name": "KGF"
               }, {
                "id": 2,
                "name": "KANTARA"
               }, {
                "id": 3,
                "name": "KRANTI"
               }, {
                "id": 4,
                "name": "BAHUBALI"
               }]
               let myParam=req.params
        
               let count=0
               for(let i=0;i<array.length;i++){
                if(array[i].id==Number(myParam.filmId)){
                    count++
                    
                    res.send(array[i])
                }
              }
               if(count==0)    
              res.send("No movie exists with this id")
        
            
                
        })


module.exports = router;