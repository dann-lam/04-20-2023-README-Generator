// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  if (license == "MIT") {
    return "(https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license == "GPL-3"){
    return "(https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license == "Creative-Commons") {
    return "(https://licensebuttons.net/l/zero/1.0/80x15.png)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  } else if (license == "GPL-3"){
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == "Creative-Commons") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  //Return a link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  if(license){
    return `[![License: ${license}]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let markDown=
`# ${data.Title}

## Description
${data.Description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Installation
${data.Installation}

## Usage
${data.Usage}
## Credits
${data.Credits}

## Questions
Contact me!
GH:https://github.com/${data.githubName};

EMail: ${data.Email}
## License
${renderLicenseSection(data.License)}`


  return markDown;
}

module.exports = generateMarkdown;
