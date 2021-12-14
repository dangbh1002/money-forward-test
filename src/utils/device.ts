

export default class Device {
    ua: string;
    mobile: boolean;
    chrome: boolean;
    safari: boolean;

    constructor(ua: string) {
        const defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
        this.ua = ua ?? defaultUA;
        const mobileUARegexp = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
        this.mobile = mobileUARegexp.test(ua);
        this.chrome = /chrome/i.test(ua);
        this.safari = /safari/i.test(ua) && !this.chrome;
    }
}
