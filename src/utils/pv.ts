export const createHistoryEvnent = <T extends keyof History>(type: T): () => any => {
  const origin = history[type];
  return function (this: any) {
      const res = origin.apply(this, arguments)
      var e = new Event(type) //event 创建自定义事件 dispatchEvent派发事件 addEventListenter监听事件 removeEventListener删除事件
      window.dispatchEvent(e)
      return res;
  }
}