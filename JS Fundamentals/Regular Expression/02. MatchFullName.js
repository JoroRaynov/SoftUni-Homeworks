 function solve(str) {
     let validNames = [];
     let pattern = /\b[a-z]+\b/g;
     let text = 'Hell can You Hear me bro'
     let matched = text.match(pattern);
     //  let validName;
     //  while (validName = pattern.exec(str)) {
     //      validNames.push(validName[0]);
     //  }
     //  console.log(validNames.join(' '));
     for (const r of matched) {
         console.log(r);

     }
 }



 solve('Ivan Ivanov', 'Georgi Raynov', 'Ivan ivanov', 'ivan Ivanov', 'IVan Ivanov', 'Test Testov', 'Iva	Ivanov')