function fetchData() {
    fetch('people.json') // Corrected file name
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Clear previous content

            data.forEach(record => {
                const recordDiv = document.createElement('div');
                recordDiv.className = 'record';
                recordDiv.innerHTML = `
                    <p><strong>First Name:</strong> ${record.firstName}</p>
                    <p><strong>Last Name:</strong> ${record.lastName}</p>
                    <p><strong>Age:</strong> ${record.age}</p>
                    <p><strong>Profession:</strong> ${record.profession}</p>
                    <p><strong>City:</strong> ${record.city}</p>
                `;
                outputDiv.appendChild(recordDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
