/* function b() {
    // tasques asíncrones , que triguen una estona..
 }
 
 funtion a() {
    // Ens esperem que la funció b acabi
    b().then() = > {
          doMoreWork();
    }
 } */

 const dades = ('Hello world');

 const b=()=>{
     return new Promise((resolve, reject)=> {
         setTimeout(()=>{
             resolve(console.log(dades));
            },2000);
         });
 }
 
 const doMoreWork=()=>{
  console.log('after b');
 }
 
 const a=async ()=>{
     const beResolved= await b();
     doMoreWork();
 }

 a();




