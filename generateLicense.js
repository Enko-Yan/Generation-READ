
export function renderLicenseBadge(license) {
  
  let renderBadge = ""

  if (license == 'MIT') {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-MIT-purple)`;
  } else if (license == 'Apache 2.0') {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-Apache%202.0-purple)`;
  } else if (license == 'GPL 3.0') {
    renderBadge = `![Static Badge](https://img.shields.io/badge/License-GPL%203.0-purple)`;
  } 

  return renderBadge;
}

export function renderLicenseLink(license) {
  let licenseLink = ""

  if (license == 'MIT') {
    licenseLink = `https://mit-license.org/`;
  } else if (license == 'Apache 2.0') {
    licenseLink = `https://www.apache.org/licenses/LICENSE-2.0.txt`;
  } else if (license == 'GPL 3.0') {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }

  return licenseLink;
}

export function renderLicenseSection(license) {
  if (license === 'None') {
    return "";
  }

  const licenseInfo = {
  badge: renderLicenseBadge(license),
  link: renderLicenseLink(license),
  };

  return `${licenseInfo.badge}\n\nFor license details, visit ${licenseInfo.link}`
}



