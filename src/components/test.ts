let data: any = null;
let callback: any = null;

export function setData(value: any) {
  data = value;
  callback(value);
}

export function setCallBack(cb: any) {
  callback = cb;
}

export function getData() {
  return data;
}
