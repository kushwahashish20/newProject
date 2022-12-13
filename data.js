
// // function fetchIds(){
//     return new Promise( (resolve,reject) =>{
//         console.log("fetching ids...");
//         setTimeout(()=>{
//             var ids=[10,20,30,40];
//             if(ids.length>0){
//                 resolve(ids);
        

//             }else{
//                 reject("error in fetching ids...");
//             }
//         },3000);
//     });
// }
// // fetchIds();
function fetchDataById(id){
    return new Promise( (resolve,reject) =>{
        console.log("fetching data by id...",id);
        setTimeout(()=>{
            var data={id:id,name:'ajay',age:28};
            if(data){
                resolve(data);
        

            }else{
                reject("error in fetching ids...");
            }
        },5000);
    });
}
fetchDataById();
