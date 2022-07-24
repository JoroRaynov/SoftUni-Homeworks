function projectsCreation(input){

    let name = (input[0]);
    let numberProjects = Number(input[1]);

    let needHours = numberProjects * 3;


    console.log(The architect ${name} will need ${needHours} hours to complete ${numberProjects} project/s.`);

    
projectsCreation(['George', '4' ])