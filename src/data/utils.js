const _ = require('lodash');

export const blue = '#31b1fd'
export const indigo = '#6610f2'
export const purple = '#7c72d8'
export const pink = '#f86c6b'
export const red = '#dc3545'
export const brick = '#bd4932'
export const orange = '#fd7e14'
export const yellow = '#ffc107'
export const green = '#28a745'
export const teal = '#20c997'
export const cyan = '#17a2b8'

export const Colors = [
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan
]

export const Rdom = (num, start, end) => {
  return _.times(num, i => {
    return _.random(start, _.random(start, end))
  })
}
// HEX TO RGBA
export const ColorAlpha = (color, opacity) => {
  var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)){
        c= color.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', ' + opacity +')';
    }
    throw new Error('Bad Hex');
}
