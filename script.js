/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function dev (devs){
  if(devs.profession=="developer"){
    console.log(devs)
  }
}
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(dev);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(dev)
}

function addData() {
  //Write your code here, just console.log
  var tpp={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(tpp)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  for(var i=0;i<arr.length;i++){
    if(arr[i].profession=="admin"){
      arr.splice(i,1)
    }
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "letmepassthismodule", age: "23", profession: "developer" },
    { id: 5, name: "letmegetpackageof10lpa", age: "28", profession: "developer" },
    { id: 6, name: "sticktoplan", age: "34", profession: "tester" },
  ];

  var resultu=[];
  //to concat the powertool tool is (...arr1) =>push
  resultu.push(...arr)
  resultu.push(...arr1)
  
  console.log(resultu);

}
