function generateStory() {

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value.toLowerCase();
    const age = parseInt(document.getElementById("age").value);
    
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const yearsLeft = 100 - age;

    const story = `Once upon a time there was a ${gender} named ${name}, who was born in ${birthYear}. This person is now ${age} years old, and has ${yearsLeft} years left until their 100th birthday!`;

    document.getElementById("story").innerText = story;
}
