function argument() {

    let counter = {};
   Array.from(arguments).forEach((line)=>{
       let type = typeof line;
        console.log(`${type}: ${line}`);

        if(!counter.hasOwnProperty(type)){
            counter[type] = 0;
        }
        counter[type] += 1;
   });
   let sort = Array.from(Object.entries(counter)).sort((a,b) => b[1]-a[1])
   .forEach(x => console.log(`${x[0]} = ${x[1]}`));
//    console.log(sort);
}
argument({ name: 'bob'}, 3.333, 9.999)