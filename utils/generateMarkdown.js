// function to generate markdown for README
function generateMarkdown(answers) {
 
  return ` 
# ${answers.title}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#install)
  * [Usage](#use)
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
  This program is licensed udner <code>${answers.license}</code>

  --

  ## Contributing
  Post forking this repo, contributions in the form of issues and pull requests are welcomed and encouraged. 

  ## Tests
  Test this application by running the following command
  <pre><code>${answers.test}</code></pre>

  ## Questions
  If there are any questions, comments, or suggestions about the application. 
  <br>
  Please contact me through my email at ${answers.email}
  <br>
  GitHub: https://github.com/${answers.github}


  `;
  }

module.exports = generateMarkdown;
