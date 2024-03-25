class Middleware {
    constructor() {
        this.middlewareList = [];
    }

    use(middleware) {
        this.middlewareList.push(middleware);
    }

    execute(ctx = {}, done) {
        const middlewareList = this.middlewareList;
        if (!middlewareList.length) return done(ctx);

        let index = -1;
        const next = () => {
            index++;
            if (index >= this.middlewareList.length) return done(ctx);
            const middleware = this.middlewareList[index];
            middleware(ctx, next);
        };

        next(ctx);
    }
}

const middleware = new Middleware();
middleware.use((ctx, next) => {
    console.log('第一个中间件开始');
    next();
    console.log('第一个中间件结束');
});

middleware.use((ctx, next) => {
    console.log('第二个中间件开始');
    next();
    console.log('第二个中间件结束');
});

middleware.use((ctx, next) => {
    console.log('第三个中间件开始');
    next();
    console.log('第三个中间件结束');
});

middleware.execute({name: '一月'}, ctx => {
    console.log('中间件执行完毕', ctx);
});
