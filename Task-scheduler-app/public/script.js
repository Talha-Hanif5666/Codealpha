function scheduleTask() {
    const task = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;

    // Construct email content
    const subject = 'Task Reminder';
    const text = `Task: ${task}\nDate: ${date}`;

    // Send email
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: email, subject, text }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Optionally, you can reset the form here
    })
    .catch(error => console.error('Error:', error));
}
