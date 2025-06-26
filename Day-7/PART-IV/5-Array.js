// const bikes = [
//   { name: "Hero Splendor Plus", price: 100 },
//   { name: "Honda Shine", price: 80 },
//   { name: "Bajaj Pulsar 150", price: 100 },
//   { name: "TVS Apache RTR 160", price: 110 },
//   { name: "Yamaha FZ-S V3", price: 120 },
//   { name: "Royal Enfield Classic 350", price: 190 },
//   { name: "KTM Duke 200", price: 210 },
//   { name: "Suzuki Gixxer SF", price: 135 },
//   { name: "Honda Unicorn", price: 98 },
//   { name: "Bajaj Avenger 160", price: 111 }
// ];
// filter() Method
// const filterPrice = bikes.filter((bike)=>{
//     return bike.name
// })
// console.log(filterPrice);

// map() Method
// const filterName = bikes.map((bike)=>{
//     return bike.name
// })
// console.log(filterName);

// find() Method
// const findName = bikes.find((bike)=>{
//     return bike.name === 'Hero Splendor Plus'
// })
// console.log(findName);

// forEach() Method
// bikes.forEach((bike)=>{
//     console.log(bike.name);
// })

// some() Method
// const trueOrFalse = bikes.some((bike)=>{
//     return  bike.price >= 1000
// })
// console.log(trueOrFalse);

// every() Method
// const checkEvery = bikes.every((bike)=>{
//     return bike.price <=1000
// })
// console.log(checkEvery);

// reduce() Method
// const sumOfAll = bikes.reduce((currentprice , bike)=>{
//     return currentprice + bike.price
// },0) 
// console.log(sumOfAll);



// include Method
// const Arr = [1,2,3,4,5,6,7,8,9]
// const includeTwo = Arr.includes(70)
// console.log(includeTwo);

// // Sort For Assecending
// const Arr = [20,25,35,10,5,];
// const newArr = Arr.sort((a,b)=>a-b);
// console.log(newArr);

// Sort For Dessanding
// const Arr = [5,10,15,20,25];
// const newArr = Arr.sort((a,b)=>b-a);
// console.log(newArr);

// Sort For Alfabet 
// const ArrWithAlfa = ["C","D","A","B",];
// ArrWithAlfa.sort()
// ArrWithAlfa.reverse()
// console.log(ArrWithAlfa);

// Splice() For Remove
// const item = ["A","B","C","D","E"];
// item.splice(1,2);
// console.log(item);

// Splice() For Add
// const item = ["A", "B", "D"];
// item.splice(2, 0, "C");
// item.splice(4,0,"E")
// console.log(item);

// slice() Method
// const item = ["A","B","C","D","E"];
// const newItem = item.slice(1,4);
// console.log(newItem);

// join() Method
// const item = ["A","B","C","D","E"];
// const newItem = item.join(" - ");
// console.log(newItem);
