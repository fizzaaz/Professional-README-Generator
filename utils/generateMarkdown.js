// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=='None')
  {
    return `[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license!=='None')
{
  return `\n* [License](##license) \n`
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
  if (license !== 'None') {
    return `## License
    This application is covered under the ${license} license.`;
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](##Installation)
  * [Usage](#Usage)
  * [Contribution](##Contribution)
  * [License](##License)
  * [Tests](##test)
  * [Questions](##question)

  ### Installation 
  ${data.install}

  ### Usage
  ${data.usage}

  ### Contribution
  ${data.Contribution}

  ### License
  ${data.license}

  ### Tests
  ${data.test}
  
  ### Questions
  If you have any queries feel free to contact me at ${data.email}.
  You can also reach me out through my Github profile at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;
