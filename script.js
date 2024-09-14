
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the birthdate from the input
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        document.getElementById('result').textContent = 'Please enter your birthdate.';
        return;
    }

    // Calculate the age
    const birthdate = new Date(birthdateInput);
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
});
