
import { HttpError } from "../utils/types";


/**
 * returns an array of the values contained within the given object
 * @param obj 
 * @returns 
 */
 export function getObjVal<T>(obj: T): Array<T[keyof T] | null> {
  let k: keyof typeof obj;
  let v: Array<T[keyof T] | null> = [];
  for (k in obj) {
    if (obj[k]) {
      v.push(obj[k]);
    } else {
      v.push(null);
    }
  }

  return v;
};

function getUniqueListBy(arr: any, key: any) {
  return [...new Map(arr.map((item: any) => [item[key], item])).values()]
}

/**
 * Handles http errors
 * @param err 
 * @param msg 
 * @returns 
 */
 export function httpError(err: Error, msg?: string): HttpError {
  const error: HttpError = err;
  error.statusCode = 502;
  error.message = msg ? msg : 'Something went wrong';
  return error;
};

/**
 *  Generates a random number within the specified range 
 * @param min 
 * @param max 
 * @returns 
 */
 export function randNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
};

export function removeDuplicateByVal(arr: Array<any>, val: any) {
  return arr.reduce((unique: any, o) => {
    if(!unique.some((obj: any)=> obj.order.id === o.order.id)) {
      unique.push(o);
    }
    return unique;
  },[]);
};

export function removeDuplicates(arr: any) {
  let seen: any = {};
  let ret_arr = [];
  for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in seen)) {
          ret_arr.push(arr[i]);
          seen[arr[i]] = true;
      }
  }
  return ret_arr;
};
