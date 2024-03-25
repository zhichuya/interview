// 比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符
// 输入："a<-b<-", "c<-d<-"，结果：true，解释：都为""
// 输入："<-<-ab<-", "<-<-<-<-a"，结果：true，解释：都为"a"
// 输入："<-<ab<-c", "<<-<a<-<-c"，结果：false，解释："<ac" !== "c"

function compareString(str1 = '', str2 = '') {
    const handleDel = (str = '') => {
        const delStr = '<-';
        let delIdx = str.indexOf(delStr);
        while (delIdx != -1) {
            if (delIdx === 0) {
                str = str.slice(delIdx + 2);
            } else {
                str = str.slice(0, delIdx - 1) + str.slice(delIdx + 2);
            }
            delIdx = str.indexOf(delStr);
        }

        return str;
    };

    return handleDel(str1) === handleDel(str2);
}

console.log(compareString('a<-b<-', 'c<-d<-'));
console.log(compareString('<-<-ab<-', '<-<-<-<-a'));
console.log(compareString('<-<ab<-c', '<<-<a<-<-c'));
