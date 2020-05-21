'use strict';
class Validator {
  constructor(schema) {
    this.schema = schema;
  }
  isValid(dataFromInput){//from input file
    let valid = true;
    for (let mainKey in this.schema){ //will loop over main Keys In Schema file
    //   console.log(dataFromInput);
      const schemaField = this.schema[mainKey];
      //   console.log(mainKey);
      //   console.log(schemaField.type);
      const isRequired = schemaField.requierd ?this.isTruthy(dataFromInput[mainKey]) : true;
      //   console.log(isRequired);
      const isType = schemaField? this.isCorrectType(dataFromInput[mainKey], schemaField) : true;
      //   console.log(typeof(dataFromInput[mainKey]));
      //   console.log(isType);
      if (!(isRequired && isType)){
        valid = false;
      }
    }
    return valid;
  }

  isCorrectType(input, field) {
    switch (field.type) {
    case 'string':
      return this.isString(input);
    case 'number':
      return this.isNumber(input);
    case 'array':
      return this.isArray(input);
    case 'object':
      return this.isObject(input);
    case 'boolean':
      return this.isBoolean(input);
    case 'function':
      return this.isFunction(input);
    default:
      return false;
    }
  }

  isString(input) {
    return typeof input === 'string';
  }
  isNumber(input) {
    return typeof input === 'number';
  }
  isBoolean(input) {
    return typeof input === 'boolean';
  }
  isArray(input, valueType) {
    return (
      Array.isArray(input) &&
      (valueType ? input.every((val) => typeof val === valueType) : true)
    );
  }
  isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }
  isFunction(input) {
    return typeof input === 'function';
  }
  isTruthy(input) {
    return !!input;
  }


}
module.exports = Validator;
