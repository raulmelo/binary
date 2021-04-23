exports.convertFormatToHandlebarsToArray = function(valuesJSON) { 
  let values = Object.entries(valuesJSON);
  values = values.map( item => { 
    return { 
      class: item[0],
      value: item[1],
    }
  })
  return values;
}
