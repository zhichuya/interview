/*
 * @Author: zhichuya 1830695417@qq.com
 * @Date: 2024-03-25
 * @LastEditors: zhichuya 1830695417@qq.com
 * @LastEditTime: 2024-03-25
 * @FilePath: /chengyuan/interview/timedTaskExecute.js
 * @Description: 传入多个任务列表，控制每200ms处理一个任务
 */

/**
 * 传入多个任务列表，控制每time毫秒处理一个任务
 * @param {Array} tasks
 * @param {Number} time
 */
function timedTaskExecute(tasks, time) {
    if (tasks.length === 0) return Promise.resolve([]);

    return new Promise(resolve => {
        let finished = 0;
        let timer = null;
        let currTaskIdx = 0;
        const tasksResult = [];

        const runTask = () => {
            let task = tasks[currTaskIdx];
            currTaskIdx++;
            task().then(
                result => {
                    finished++;
                    tasksResult.push({status: 'success', result: result});

                    // 所有任务都运行完，返回结果
                    if (finished === tasks.length) {
                        clearInterval(timer);
                        resolve(tasksResult);
                    }
                },
                reason => {
                    finished++;
                    tasksResult.push({status: 'fail', reason: reason});

                    // 所有任务都运行完，返回结果
                    if (finished === tasks.length) {
                        clearInterval(timer);
                        resolve(tasksResult);
                    }
                }
            );
        };

        // 先启动一个任务的执行
        timer = setInterval(() => {
            runTask();
        }, time);
    });
}

function getTasks(nums) {
    const tasks = [];
    for (let i = 0; i < nums; i++) {
        const task = async () => {
            console.log(`第${i + 1}个任务开始...`);
            const result = await `第${i + 1}个任务的结果>>>`;
            console.log(`第${i + 1}个任务完成!!!`);
            return result;
        };
        tasks.push(task);
    }

    return tasks;
}

timedTaskExecute(getTasks(20), 200).then(data => {
    console.log(data);
});
