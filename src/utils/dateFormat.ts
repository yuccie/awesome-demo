
export function getDate (strDate: string) {
  let day = '123';
  const month = '2';
  //console.log(month);
}

interface CallBack {
  ():void;
}
export async function delayFunc(func: CallBack, time: number) {
  return await setTimeout(() => {
    func.call(null);
  }, time);
}

export function defaultFunc({x = 2, y = 1} = {}) {
  //console.log(x, y);
}

defaultFunc();