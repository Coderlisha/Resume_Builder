function addExperience() {
    const container = document.getElementById("experienceInputs");
    const template = document.getElementById("experienceTemplate");
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}

function addEducation() {
    const container = document.getElementById("educationInputs");
    const template = document.getElementById("educationTemplate");
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}

function addCertification() {
    const container = document.getElementById("certificationInputs");
    const template = document.getElementById("certificationTemplate");
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}

function addProject() {
    const container = document.getElementById("projectInputs");
    const template = document.getElementById("projectTemplate");
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}

function generateResume() {
    const preview = document.getElementById("resumePreview");

   
    const personalInfo = `
        <h2>Personal Information</h2>
        <p><strong>${document.getElementById("fullName").value}</strong></p>
        <p>Email: ${document.getElementById("email").value}</p>
        <p>Phone: ${document.getElementById("phone").value}</p>
        <p>Location: ${document.getElementById("location").value}</p>
    `;

   
    const summary = `
        <h2>Professional Summary</h2>
        <p>${document.getElementById("summary").value}</p>
    `;

   
    let experience = "<h2>Work Experience</h2>";
    document.querySelectorAll("#experienceInputs .input-group").forEach(exp => {
        const inputs = exp.querySelectorAll("input, textarea");
        experience += `
            <h3>${inputs[0].value} - ${inputs[1].value}</h3>
            <p>${inputs[2].value}</p>
            <p>${inputs[3].value}</p>
        `;
    });

   
    let education = "<h2>Education</h2>";
    document.querySelectorAll("#educationInputs .input-group").forEach(edu => {
        const inputs = edu.querySelectorAll("input");
        education += `
            <h3>${inputs[0].value}</h3>
            <p>${inputs[1].value}</p>
            <p>${inputs[2].value} | Score: ${inputs[3].value}</p>
        `;
    });

   
    let certifications = "<h2>Certifications</h2>";
    document.querySelectorAll("#certificationInputs .input-group").forEach(cert => {
        const inputs = cert.querySelectorAll("input");
        certifications += `
            <h3>${inputs[0].value}</h3>
            <p>${inputs[1].value} (${inputs[2].value})</p>
        `;
    });

 
    let projects = "<h2>Projects</h2>";
    document.querySelectorAll("#projectInputs .input-group").forEach(proj => {
        const inputs = proj.querySelectorAll("input, textarea");
        projects += `
            <h3>${inputs[0].value}</h3>
            <p>${inputs[1].value}</p>
        `;
    });

  
    preview.innerHTML = personalInfo + summary + experience + education + certifications + projects;
}

function printResume() {
    const preview = document.getElementById("resumePreview");
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print Resume</title></head><body>');
    printWindow.document.write(preview.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}


addExperience();
addEducation();
addCertification();
addProject();
