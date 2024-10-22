function calculateGrade() {
    const score1 = parseFloat(document.getElementById('score1').value) || 0;
    const score2 = parseFloat(document.getElementById('score2').value) || 0;
    const score3 = parseFloat(document.getElementById('score3').value) || 0;
    const score4 = parseFloat(document.getElementById('score4').value) || 0;
    const score5 = parseFloat(document.getElementById('score5').value) || 0;
    
    const average = (score1 + score2 + score3 + score4 + score5) / 5;

    let grade = '';
    if (average >= 5.5) {
        grade = 'A';
    } else if (average >= 4.5) {
        grade = 'B';
    } else if (average >= 3.5) {
        grade = 'C';
    } else if (average >= 2.5) {
        grade = 'D';
    } else if (average >= 1.5) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `The student got ${average.toFixed(2)} in average. This corresponds to the grade ${grade}.`;
}
