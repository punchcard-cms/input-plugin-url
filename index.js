'use strict';

/**
 * Url Input Plugin
 *
 *
 * A simple Url input plugin
 */
const validation = require('./lib/validation.js');

/**
 * Single Url Input Plugin
 * @module urlInputPlugin
 */
module.exports = {
  name: 'Url',
  description: 'A simple Url input plugin',
  validation: {
    urlValidation: validation,
  },
  inputs: {
    url: {
      validation: {
        function: 'urlValidation',
        on: 'blur',
      },
      label: 'Url',
      placeholder: 'http://',
      type: 'url',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{url.id}}">{{url.label}}</label><input type="{{url.type}}" id="{{url.id}}" name="{{url.name}}" value="{{url.value}}" placeholder="{{url.placeholder}}" />',
};
