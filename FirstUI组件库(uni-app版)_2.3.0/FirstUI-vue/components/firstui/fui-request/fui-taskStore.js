class RequestTaskStore {
    constructor(taskList = []) {
        this.taskStore = taskList; // echo建议
    }
    setRequestTaskStore(taskArr, taskKey) {
        taskKey && taskArr.push(taskKey);
        this.taskStore = taskArr;
    }
    removeRequestTask(task) {
        if (!task) return;
        const taskKey = this.getRequestTask(task);
        let taskArr = [...this.taskStore];
        const index = taskArr.indexOf(taskKey);
        if (~index) {
            // echo建议
            taskArr.splice(index, 1);
            this.setRequestTaskStore(taskArr);
        }
    }
    getRequestTask(task) {
        let {
            url,
            method,
            keys, // 功能需要优化
            data,
        } = task;
        keys = keys || []; // echo建议
        data = typeof data === "string" ? JSON.parse(data) : data;
        let taskArr = [];
        for (let key in data) {
            if (data.hasOwnProperty(key) && !~keys.indexOf(key)) {
                let value = data[key] === null ? "" : data[key];
                taskArr.push(
                    encodeURIComponent(key) + "=" + encodeURIComponent(value)
                );
            }
        }
        return url + method + taskArr.join("");
    }
    requestTaskStore(task) {
        let result = false;
        if (!task) return result;
        const taskKey = this.getRequestTask(task);
        let taskArr = [...this.taskStore];
        if (taskArr.length > 0) {
            if (~taskArr.indexOf(taskKey)) {
                result = true;
            } else {
                this.setRequestTaskStore(taskArr, taskKey);
            } // todo: 待修改
        } else {
            taskKey && this.setRequestTaskStore(taskArr, taskKey);
        }
        return result;
    }
}
export default function createTaskStore(taskList = []) {
    return new RequestTaskStore(taskList);
}
