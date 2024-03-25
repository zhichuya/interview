/**
 * 根据运算优先级添加括号
 * 已知一个字符串是由正整数和加减乘除四个运算符(+ - * /)组成
 *    例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'
 *    现在需要将高优先级运算，用小括号包裹起来
 *    例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'
 *    注意可能会出现连续的乘除运算，需要包裹到一起
 * @param {String} expression
 */
function addBrackets(expression) {
    const symbolArr = ['+', '-', '*', '/'];
    const highLevelSymbolArr = ['*', '/'];
    const result = [];

    // 临时拼接数据
    let temp = '';
    // 是否在括号中
    let isInBracket = false;
    const isSymbol = char => symbolArr.includes(char);
    const isHighLevelSymbol = char => highLevelSymbolArr.includes(char);

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        // 运算符
        if (isSymbol(char)) {
            // 高优先级运算符
            if (isHighLevelSymbol(char)) {
                // 没在括号中，temp前拼接(
                if (!isInBracket) {
                    temp = '(' + temp;
                }

                // 进入括号中
                isInBracket = true;
                temp = temp + char;
            } else {
                // 普通运算符

                // 括号中 => temp右边拼接)
                if (isInBracket) {
                    result.push(temp + ')');
                    isInBracket = false;
                } else {
                    result.push(temp);
                }

                // 加入普通运算符
                result.push(char);
                temp = '';
            }
        } else {
            // 不是运算符号继续拼接数据
            temp = temp + char;
        }
    }

    // temp存在
    if (temp) {
        if (isInBracket) {
            temp = temp + ')';
        }
        result.push(temp);
    }

    return result.join('');
}
console.log(addBrackets('11+2-3*4+5/20*40+10/5+1'));
