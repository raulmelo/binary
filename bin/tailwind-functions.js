const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const UtilsConvert = require('./utils/convert');
const emojic = require("emojic");
const boxen = require('boxen');

const templatesCreated = {
  'Typography': ['fontSize', 'fontWeight', 'fontFamily', 'fontStyle', 'letterSpacing', 'lineHeight'],
  'Spacing': ['spacing'],
  'sizing': ['width', 'minWidth', 'maxWidth', 'height', 'maxHeight', 'minHeight']
};

exports.loader = function(configTailwind) { 
  const templatesKeys = Object.keys(templatesCreated);
  console.log(emojic.whiteCheckMark + "File created");
  console.log(boxen(
  `${templatesKeys.map( item => ' ' + item  )}` , { padding: 1}));
  templatesKeys.forEach( group  => { 
    const _group = templatesCreated[group];
    const hasValue = {}
    _group.forEach( property => {
      if(configTailwind.theme[property] !== undefined && Object.keys(configTailwind.theme[property]).length >= 1) { 
        const values = configTailwind.theme[property];
        const getValuesArray = UtilsConvert.convertFormatToHandlebarsToArray(values);
        hasValue[property] = JSON.stringify(getValuesArray);
      }
    })
    generatorTemplateHbs(group, hasValue);
  })
}


function generatorTemplateHbs(property, configGroup) {
  const templateHandlebars = fs.readFileSync(path.resolve(__dirname, 'templates/' + property + '.hbs')).toString('utf8');
  const template = Handlebars.compile(templateHandlebars, { noEscape: true });
  const htmlString = template(configGroup);
  var dir = process.cwd() + '/src/stories/stories-tailwind';
  try {
    fs.writeFileSync(dir + "/tailwind-" + property+ ".stories.mdx", htmlString, { encoding: "utf-8"});
  } catch (error) {
    console.log(error)
  }
}