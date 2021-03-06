const expect = require('chai').expect;
const rechoir = require('../');

var expected = {
  data: {
    trueKey: true,
    falseKey: false,
    subKey: {
      subProp: 1
    }
  }
};

describe('registerFor', function () {
  it('should know coco', function () {
    rechoir.registerFor('./test/fixtures/test.co');
    expect(require('./fixtures/test.co')).to.deep.equal(expected);
  });
  it('should know coffee-script', function () {
    rechoir.registerFor('./test/fixtures/test.coffee');
    expect(require('./fixtures/test.coffee')).to.deep.equal(expected);
  });
  it('should know csv', function () {
    rechoir.registerFor('./test/fixtures/test.csv');
    expect(require('./fixtures/test.csv')).to.deep.equal([['r1c1','r1c2'],['r2c1','r2c2']]);
  });
  it('should know iced-coffee-script', function () {
    rechoir.registerFor('./test/fixtures/test.iced');
    expect(require('./fixtures/test.iced')).to.deep.equal(expected);
  });
  it('should know ini', function () {
    rechoir.registerFor('./test/fixtures/test.ini');
    expect(require('./fixtures/test.ini')).to.deep.equal({
      data: {
        trueKey: "true",
        falseKey: "false"
      }
    });
  });
  it('should know .js', function () {
    rechoir.registerFor('./test/fixtures/test.js');
    expect(require('./fixtures/test.js')).to.deep.equal(expected);
  });
  it('should know .json', function () {
    rechoir.registerFor('./test/fixtures/test.json');
    expect(require('./fixtures/test.json')).to.deep.equal(expected);
  });
  it('should know .json5', function () {
    rechoir.registerFor('./test/fixtures/test.json5');
    expect(require('./fixtures/test.json5')).to.deep.equal(expected);
  });
  it('should know jsx', function () {
    rechoir.registerFor('./test/fixtures/test.jsx');
    expect(require('./fixtures/test.jsx')).to.deep.equal(expected);
  });
  it('should know es6', function () {
    rechoir.registerFor('./test/fixtures/test.es6');
    expect(require('./fixtures/test.es6')).to.deep.equal(expected);
  });
  it('should also register on .es', function () {
    rechoir.registerFor('./test/fixtures/test.es');
    expect(require('./fixtures/test.es')).to.deep.equal(expected);
  });
  it('should know livescript', function () {
    rechoir.registerFor('./test/fixtures/test.ls');
    expect(require('./fixtures/test.ls')).to.deep.equal(expected);
  });
  it('should know literate coffee-script', function () {
    rechoir.registerFor('./test/fixtures/test.litcoffee');
    expect(require('./fixtures/test.litcoffee')).to.deep.equal(expected);
  });
  it('should know literate coffee-script (.md)', function () {
    rechoir.registerFor('./test/fixtures/test.coffee.md');
    expect(require('./fixtures/test.coffee.md')).to.deep.equal(expected);
  });
  it('should know literate iced-coffee-script', function () {
    rechoir.registerFor('./test/fixtures/test.liticed');
    expect(require('./fixtures/test.liticed')).to.deep.equal(expected);
  });
  it('should know literate iced-coffee-script (.md)', function () {
    rechoir.registerFor('./test/fixtures/test.iced.md');
    expect(require('./fixtures/test.iced.md')).to.deep.equal(expected);
  });
  it('should know ts', function () {
    rechoir.registerFor('./test/fixtures/test.ts');
    expect(require('./fixtures/test.ts')).to.deep.equal(expected);
  });
  it('should know toml', function () {
    rechoir.registerFor('./test/fixtures/test.toml');
    expect(require('./fixtures/test.toml')).to.deep.equal(expected);
  });
  it('should know xml', function () {
    rechoir.registerFor('./test/fixtures/test.xml');
    expect(JSON.parse(require('./fixtures/test.xml'))).to.deep.equal(expected);
  });
  it('should know yaml', function () {
    rechoir.registerFor('./test/fixtures/test.yaml');
    expect(require('./fixtures/test.yaml')).to.deep.equal(expected);
  });
  it('must not fail on folders with dots', function () {
    delete require.extensions['.yml'];
    delete require.extensions['.yaml'];
    delete require.cache[require.resolve('require-yaml')];
    rechoir.registerFor('./test/fixtures/folder.with.dots/test.yaml');
    expect(require('./fixtures/folder.with.dots/test.yaml')).to.deep.equal(expected);
  });
});

describe('interpret', function () {
  it('should expose the underlying interpret object', function () {
    expect(rechoir.interpret).to.deep.equal(require('interpret'));
  });
});
