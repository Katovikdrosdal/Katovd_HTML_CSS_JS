    
        let number = [4, 5, 2, 3, 4, 6, 1, 2, 0, 9, 7, 6, 8, 5, 6, 4, 2, 3, 4, 7, 3];

    
        let frequency = Array(10).fill(0);

    
        for (let i = 0; i < number.length; i++) {
            frequency[number[i]]++;
        }

        
        let outputDiv = document.getElementById("output");

    
        for (let i = 0; i < frequency.length; i++) {
            if (frequency[i] > 0) {
                let p = document.createElement("p");
                p.textContent = `Number ${i} occurs ${frequency[i]} times`;
                if (i % 2 === 0) {
                
                    p.style.color = "blue";
                } else {
                
                    p.style.color = "red";
                }
                outputDiv.appendChild(p);
            }
        }