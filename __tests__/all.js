test('生成snapshot', () => {
    const util = require('../index.js');
    expect(util()).toMatchSnapshot();
})