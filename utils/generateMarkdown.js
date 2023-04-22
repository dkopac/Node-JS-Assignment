// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection(data.badge)}
# ${data.title}

## Description
${data.description}

## Table Of Contents
- [Title](#title)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#title)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)
- [Future Development](#Future-Development)
- [Credits](#Credits)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.Contributing}

## Tests
${data.tests}

## License
${data.license}
`;
}

module.exports = generateMarkdown;
