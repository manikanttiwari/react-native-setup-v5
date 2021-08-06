import {Dimensions,PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property){
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, radius = 8,opacity = 0.5, offset = {height:-2,width:0}){
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
export function insetShadow(color, radius = 8,opacity = 0.5, offset = {height:-4,width:2}){
  return {
    backgroundColor: 'transparent',
    borderColor: color,
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: color,
    shadowRadius: radius,
    shadowOpacity: opacity,
    shadowOffset: offset,
    elevation: radius,
  };
}