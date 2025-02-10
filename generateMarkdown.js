// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {
  
  let renderBadge = " "

  if (license == 'MIT') {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-MIT-purple)`
  } else if (license == 'Apache 2.0') {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-Apache%202.0-purple)`
  } else if (license == `GPL 3.0`) {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-GPL%203.0-purple)`
  } 

  return renderBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
