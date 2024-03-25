/*
 * @Author: chengcheng 1830695417@qq.com
 * @Date: 2023-09-19
 * @LastEditors: chengcheng 1830695417@qq.com
 * @LastEditTime: 2023-09-19
 * @FilePath: /interview/concurrentTask.js
 * @Description: 以指定数量执行并发任务
 */

/*
 * @Description: 以指定数量(limit)执行并发任务(tasks) 执行完毕之后返回所有任务的结果
 * @Param tasks 异步任务数组
 * @Param limit 并行执行数量
 * @return Promise 返回一个Promise所有任务的执行结果在resolve的回调中
 * @Author: chengcheng
 * @Date: 2023-09-19
 */
function concurrentTask(tasks = [], limit = 0) {
    if (tasks.length === 0 || limit === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        let finished = 0;
        let currTaskIdx = 0;
        const tasksResult = [];

        const run = () => {
            let task = tasks[currTaskIdx];
            currTaskIdx++;
            task().then(
                result => {
                    finished++;
                    tasksResult.push({status: 'success', result: result});

                    // 运行下一个任务
                    if (currTaskIdx < tasks.length) {
                        run();
                    }

                    // 所有任务都运行完，返回结果
                    if (finished === tasks.length) {
                        resolve(tasksResult);
                    }
                },
                reason => {
                    finished++;
                    tasksResult.push({status: 'fail', reason: reason});

                    // 运行下一个任务
                    if (currTaskIdx < tasks.length) {
                        run();
                    }

                    // 所有任务都运行完，返回结果
                    if (finished === tasks.length) {
                        resolve(tasksResult);
                    }
                }
            );
        };

        // 先启动limit个任务的执行
        for (var i = 0; i < limit && i < tasks.length; i++) {
            run();
        }
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

console.log(
    concurrentTask(getTasks(10), 2).then(tasksResult => {
        console.log(tasksResult);
    })
);
