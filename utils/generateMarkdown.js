// function to generate markdown for README
function generateMarkdown(answers, url) {

  return `# ${answers.title} ${url}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credit)
  * [License](#license)
  * [Tests](#test)
  * [Questions](#questions) 

  ## Installation
  Run this to install and get started
  <pre><code>${answers.install}</code></pre>


  ## Usage 
  ${answers.use}

  ## Credits
  Contributors: ${answers.credit}

  ##License
  Licensed under <code>${answers.license}</code>

  --

  ## Contributing
  After forking the repo, contributions in the form of issues and pull requests are welcomed and encouraged. 

  ## Tests
  Test this application by running the following command
    <pre><code>${answers.test}</code></pre>

  ## Questions
  If there are any comments or suggestions about the application. 
  <br>
    Email: ${answers.email}
  <br>
    GitHub:${answers.github}
  `;
}

module.exports = generateMarkdown;
