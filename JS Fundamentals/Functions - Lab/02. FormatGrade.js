function formatGrade(grade){
    let formatGrade = grade.toFixed(2)
    let result = '';

    if(grade < 3){
         result = 'Fail';
        formatGrade = '2'

    } else if (grade < 3.5){
        result = 'Poor';

    } else if (grade < 4.5){
        result = 'Good';

    } else if (grade < 5.5){
        result = 'Very good';

    } else {
        result = 'Excellent'
    }
console.log(`${result} (${formatGrade})`);
}
formatGrade(2.99)