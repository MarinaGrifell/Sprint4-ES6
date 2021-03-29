
    console.log("hey");
let tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];

    var resultatForEach=[];
    
    tasks.forEach(element => {
        resultatForEach.push(element.name);
    });

    console.table(resultatForEach);

    const resultatMap= tasks.map(item=> {
       return item.name
    });

    console.table(resultatMap);
