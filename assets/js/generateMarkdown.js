// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "none" || license === undefined) {return "n/a";} else if (license === "Apache License 2.0"){
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';

  } else if (license === "GNU GPL v3"){ return 'https://img.shields.io/badge/License-GPLv3-blue.svg';

  } else if(license === "ISC License"){ return 'https://img.shields.io/badge/License-ISC-blue.svg'

  } else if(license ==="MIT"){ return 'https://img.shields.io/badge/License-MIT-blue.svg'

  };

  };
  
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none" || license === undefined) {return "";} else if (license === "Apache License 2.0"){ return 'https://choosealicense.com/licenses/apache-2.0/';

  } else if (license === "GNU GPL v3"){ return 'https://choosealicense.com/licenses/gpl-3.0/';

  } else if(license === "ISC License"){ return 'https://choosealicense.com/licenses/isc/';

  } else if(license ==="MIT"){ return 'https://choosealicense.com/licenses/mit/';

  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license,name) {
  if (license === "none" || license === undefined) {return "n/a";} else if (license === "Apache License 2.0"){ return `  Apache License
  Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION`;
  } else if (license === "GNU GPL v3"){ 
    return `refer to the link above for more details of this license
  GNU GENERAL PUBLIC LICENSE
  Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`

  } else if(license === "ISC License"){ return `ISC License

  Copyright (c) [2023] [${name}]
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted, provided that the above
  copyright notice and this permission notice appear in all copies.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.`;

  } else if(license ==="MIT"){ return `MIT License

  Copyright (c) [2023] [${name}]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`;
  };
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].title}

## Description

${data[0].description}

## Table of Contents 
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](<#features>)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Github](#github)
- [Contact Me](#contact-me)
  
## Installation
  
${data[0].installation}
  
## Usage
  
${data[0].usage}
  
## Credits
  
${data[0].credits}

## License

${renderLicenseLink(data[0].licenseChoice)}

${renderLicenseSection(data[0].licenseChoice,data[0].github)}

## Badges
 
![license badge](${renderLicenseBadge(data[0].licenseChoice)})

## Features

${data[0].features}

## How to Contribute
  
${data[0].howToContribute}
  
## Tests
  
${data[0].howToContribute}

## Github

github username: ${data[0].github}

Link to github profile: https://github.com/${data[0].github}

## Contact Me

${data[0].contantInformation}

`;
}

module.exports = generateMarkdown;
