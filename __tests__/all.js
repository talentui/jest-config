test('生成snapshot', () => {
    const util = require('../index.js');
    let conf = util();
    expect(conf).toHaveProperty('transform');
    expect(conf).toHaveProperty('moduleDirectories');
    expect(conf).toHaveProperty('globals');
    expect(conf).toHaveProperty('collectCoverageFrom');
    expect(conf).toHaveProperty('moduleNameMapper');
    expect(conf).toHaveProperty('testRegex');
    expect(conf).toHaveProperty('moduleFileExtensions');
})