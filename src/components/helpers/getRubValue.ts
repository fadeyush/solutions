interface dataProps {
    [key: string]: [key: number];
  }
export function getRubValue(data:dataProps, currencie: string ){
    const rubKey:string = 'rub';
    if (data === undefined) return;
    for (let key in data[currencie]) {
        if (key === currencie) {  
            let obj = data[key];
            for (let key in obj) {
                if (key === rubKey) {
                    return obj[key];
                }
            }
        }
    }
};
