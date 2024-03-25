// 模糊不连续搜索
// chengyuan, hgy => true
// chengyuan, cc => false

// 单指针遍历法
const match = (text, keyword) => {
    if (keyword.length > text.length) {
        return false;
    }

    let findIdx = -1;
    for (let i = 0; i < keyword.length; i++) {
        findIdx = text.indexOf(keyword[i], findIdx);
        if (findIdx === -1) {
            return false;
        }
    }

    return true;
};

// 双指针解法
const matchSearch = (text, keyword) => {
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === keyword[j]) {
            j++;
        }
        if (j === keyword.length) {
            return true;
        }
    }
    return false;
};

console.log(match('chengyuan', 'chy'));
