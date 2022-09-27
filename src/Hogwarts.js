import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

console.log(GryffFunctions.colors);
GryffFunctions.gryffMascot();
GryffFunctions.values();





function Hogwarts(){
    whoseHouse(); // =>"HAGRID'S HOUSE!"
        return <h1>Welcome to Hogwarts!</h1>;

    // return(
      
    //     <div>
    //         <Hufflepuff />
    //         <GryffFunctions />
    //     </div>
    // );
}

export default Hogwarts;