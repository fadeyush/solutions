interface dataProps {
    [key: string]: [key: number];
  }
export function getRubValue(data:dataProps, currencie: string ){
    const rubKey:string = 'rub';
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
