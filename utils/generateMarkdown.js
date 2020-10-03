// function to generate markdown for README
function generateMarkdown(answers) {
 
  return ` 
  # ${answers.title}

  ## Description
  ${answers.description} 

  ## Installation
  Run this to install and get started
  <pre><code>${answers.install}</code></pre>


## Usage 
${answers.use}

## Credits
Contributors: ${answers.credit}

##License
This program is licensed udner <code>${answers.license}</code>



---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.


---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


`;
}

module.exports = generateMarkdown;
