// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. Apache 2.0",Boost Software License 1.0",GNU-General-Public GPL v3",MIT",Mozilla-Public 2.0
//Do we need to use a switch statement??
function renderLicenseBadge(license) {
  if (license == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license == "GNU-General-Public GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license == "Mozilla-Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license == "None") {
    return "None Selected";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Insert TOC and all here this is the layout of your markdown file
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeLic = renderLicenseBadge(data.license);
  return `# ${data.title}

## Description:
${data.description}

### Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#testing)
- [Questions](#additional-info)

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}
${badgeLic}


## Contribution:
${data.contribution}

## Testing:
${data.testing}

## Additional Info: 
Contact me:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} 
  `;
}
module.exports = generateMarkdown;
