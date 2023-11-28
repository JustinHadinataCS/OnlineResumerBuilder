let generatedResumeHTML = '';

function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const workYear = document.getElementById('workYear').value;
    const template = document.getElementById('template').value;

    const resumeHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email} | Phone: ${phone}</p>

        <h3>Education:</h3>
        <p>${degree} - ${university}, ${graduationYear}</p>

        <h3>Work Experience:</h3>
        <p>${jobTitle} at ${company} (${workYear})</p>
    `;
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
    generatedResumeHTML = resumeHTML;
}

function writeToFile() {
  const content = generatedResumeHTML;
  const blob = new Blob([generatedResumeHTML], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, 'output.pdf');
}
