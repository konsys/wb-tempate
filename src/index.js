import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;
  
    console.log(111, Data);
    console.log(222, Notes);

    console.log(toml.title); // output `TOML Example`
    console.log(toml.owner.name); // output `Tom Preston-Werner`

    console.log(yaml.title); // output `YAML Example`
    console.log(yaml.owner.name); // output `Tom Preston-Werner`

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`

    return element;
  }
  
  document.body.appendChild(component());