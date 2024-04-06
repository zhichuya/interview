/**
 * 使用jsonp请求跨域数据
 * @param {Object} params
 */
function jsonp(params) {
    const {url, data, callback} = params;
    const genRequestData = data => {
        let requestData = '';
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const value = data[key];
                requestData += `${key}=${value}&`;
            }
        }
        return requestData.slice(0, requestData.length - 1);
    };

    return new Promise((resolve, reject) => {
        const scriptEl = document.createElement('script');

        window[callback] = data => {
            resolve(data);
            delete window[callback];
            document.body.removeChild(scriptEl);
        };

        scriptEl.src = `${url}?${genRequestData(data)}`;
        document.body.appendChild(scriptEl);
    });
}
