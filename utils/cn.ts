import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = {
  Red: '#380020',
  Orange: '#002038',
  Yellow: '#f7df1e',
  Green: '#002038',
  Blue: '#00ADD8',
  Purple: '#002038',
  Violet: '#002038',
  Python: '#4584b6',
  Dart: '#027DFD',
  Cpp: '#044F88',
  Typescript: '#3178c6',
};

export default colors;
