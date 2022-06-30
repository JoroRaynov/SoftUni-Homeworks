function crew(obj){
    // console.log(obj[]);

    if(obj['dizziness']){
        obj['levelOfHydrated'] += obj['experience'] *(obj['weight'] * 0.1);
        obj['dizziness'] = false;
    } 
    return obj

}
console.log(crew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  ));