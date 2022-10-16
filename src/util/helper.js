const today= new Date()
const day=today.getDate()
const month=today.getMonth()
const year=today.getFullYear()
const checkBatch={
    batch:"lithium",
    day:"w3d3",
    topic:"the topic for today iS nodejS modules system"
}
console.log(day)
console.log(month)
console.log(year)
console.log(`${checkBatch.batch},${checkBatch.day},${checkBatch.topic}`)

module.exports.myToday=today
