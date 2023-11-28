function generateResume() {
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

function downloadPDF() {
  if (!generatedResumeHTML) {
      alert('Please generate the resume first.');
      return;
  }

  const pdf = new jsPDF();
  pdf.text(generatedResumeHTML, 10, 10);

  const pdfBlob = pdf.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);

  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'resume.pdf';
  downloadLink.click();
}