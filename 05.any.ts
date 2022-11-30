(()=>{

    let myDynamicVar: any ; 
    myDynamicVar: null ; 
    myDynamicVar: 100; 
    myDynamicVar: {} ; 
    myDynamicVar: '' ; 
    
    myDynamicVar = 'hola';
    const rta =  (myDynamicVar as string ).toLowerCase // Forma 1 (casting de datos a string )
    console.log(rta);
    

    myDynamicVar = 1212;
    const rta2 = (<number> myDynamicVar).toFixed();
    console.log(rta2); 




})();