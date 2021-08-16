/* Displays list of names from DataMuse response */ 
export default function findName(res) {
    try {
      
      /* Convert response to array of names */
      let newNames = [];
      let selectedIndexes = [];
      
      /* Maximum index of DataMuse response ranked by
      score, higher values are generally less accurate 
      but provide more options */
      let maxIndex = 30;

      /* Generate array of random numbers within index range of 
      API query repsonse */ 
      while(
      selectedIndexes.length < 10 && 
      selectedIndexes.length < res.length) {          
        
        let randNum = Math.floor(Math.random()*res.length); 
        
        if(!selectedIndexes.includes(randNum) && randNum < maxIndex) {           
          selectedIndexes.push(randNum);
          newNames.push(res[randNum].word);
        }
      }

      /* Convert array of names to string */
      let newNamesString = "";
      for (let i = 0; i < newNames.length; i++) {
            // Capitalize first letter of each word
            if(document.getElementById("caps").value==="allCaps") {
            let capsArr = newNames[i].split(" ");
            capsArr.forEach(
                (name, index) => capsArr[index] = name[0].toUpperCase() + name.slice(1)
            );
            newNames[i] = capsArr.join(" ");
            console.log(capsArr);
            }

            // Capitalize with camelCase 
            if(document.getElementById("caps").value==="camelCase") {
            let capsArr = newNames[i].split(" ");
            capsArr.forEach(
                (name, index) => {
                if(index>0) {capsArr[index] = name[0].toUpperCase() + name.slice(1)}
                }
            );
            newNames[i] = capsArr.join(" ");
            console.log(capsArr);
            }

            // Remove spaces between words in name
            if(document.getElementById("noSpace").checked) {
            newNamesString += newNames[i].split(" ").join("");
            } else {
            newNamesString += newNames[i];
            }
            
            // Append random four digit number to name
            if(document.getElementById("rand").checked) {
            // Remove space between name and numbers
            if(document.getElementById("noSpaceNum").checked) {
                newNamesString += "" + (1000+Math.floor(Math.random()*9000));
            } else {
                newNamesString += " " + (1000+Math.floor(Math.random()*9000));
            }
            }
            
            if(i < newNames.length - 1) {
            newNamesString += ", ";
            }
      }
      /* Response for invalid theme response from API */
      if(newNames < 1) {
        return("invalid theme");
      } else {
        return(newNamesString);
      }
    } catch(error) {
      console.log(error.message)
    }
  }