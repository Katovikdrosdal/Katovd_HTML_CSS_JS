const fs = require('fs');
const path = require('path');

// File path for the tips.csv
const filePath = path.join(__dirname, 'tips.csv');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the data into an array of numbers
    const tipsArray = data.split(',').map(tip => parseFloat(tip.trim()));

    // Calculate total and average
    const total = tipsArray.reduce((sum, tip) => sum + tip, 0);
    const average = (total / tipsArray.length).toFixed(2);

    // Print daily tips
    console.log('Daily Tips:');
    tipsArray.forEach((tip, index) => {
        console.log(`Day ${index + 1}: ${tip} kr`);
    });

    // Print summary
    console.log('\nSummary:');
    console.log(`Total Tips: ${total} kr`);
    console.log(`Average Tips: ${average} kr`);
});
