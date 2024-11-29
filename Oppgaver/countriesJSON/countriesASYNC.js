async function fetchData() {
    try {
        const response = await fetch('countries.json');
        const data = await response.json();

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous content

        data.forEach(record => {
            const recordDiv = document.createElement('div');
            recordDiv.className = 'record';
            recordDiv.innerHTML = `
                <p><strong>Name:</strong> ${record.name}</p>
                <img src="${record.flag}" alt="Flag of ${record.name}" style="width:100px; height:auto;">
                <p><strong>Capital:</strong> ${record.capital}</p>
                <p><strong>Population:</strong> ${record.population.toLocaleString()}</p>
            `;
            outputDiv.appendChild(recordDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
