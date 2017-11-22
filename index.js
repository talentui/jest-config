const path = require("path");
module.exports = function(options = {}) {
    let { root: appRoot = process.cwd(), globals } = options;
    return {
        //自定义如何处理js文件
        transform: {
            "^.+\\.jsx?$": path.resolve(__dirname, "./utils/js-processor.js"),
            // support ts 单元测试用例
            "^.+\\.tsx?$": path.resolve(__dirname, "./utils/ts-processor.js")
        },

        moduleDirectories: [path.resolve(appRoot, "./src"), "node_modules"],
        globals: globals || {},
        collectCoverageFrom: ["**/src/**/*.{js,jsx}", "!**/node_modules/**"],
        moduleNameMapper: {
            //模块查找规则， 第一条与talent-ui的默认规则相同，其他的是非js模块的处理规则
            "&(.*)$": "<rootDir>/src$1",
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(
                __dirname,
                "./utils/file-mock.js"
            ),
            "\\.(css|less|scss)$": path.resolve(
                __dirname,
                "./utils/style-mock.js"
            )
        },
        testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
        moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"]
    };
};
