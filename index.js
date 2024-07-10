const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Function to calculate the total number of batteries using reduce
function getTotalBatteries(batteryBatches) {
    const totalBatteries = batteryBatches.reduce(function(total, batch) {
      return total + batch;
    }, 0); // Initial value of total is 0
    
    return totalBatteries;
  }
  
  // Assigning the result of getTotalBatteries to totalBatteries variable
  const totalBatteries = getTotalBatteries(batteryBatches);
  
  // Testing the function
  console.log(totalBatteries); // Output: 31