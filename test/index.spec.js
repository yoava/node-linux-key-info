const expect = require('chai').expect;
const keyCodeInfo = require('../').keyCodeInfo;
const listAllKnownKeys = require('../').listAllKnownKeys;

describe('linux-key-info', () => {

  describe('#keyCodeInfo()', () => {

    it('should return "ESC" key for key code 1', () => {
      expect(keyCodeInfo(1).name).to.equal('ESC');
      expect(keyCodeInfo(1).char).to.equal('');
    });

    it('should return "A" key for key code 30', () => {
      expect(keyCodeInfo(30).name).to.equal('A');
      expect(keyCodeInfo(30).char).to.equal('A');
    });

    it('should return "1" key for key code 2', () => {
      expect(keyCodeInfo(2).name).to.equal('1');
      expect(keyCodeInfo(2).char).to.equal('1');
    });

    it('should return "MINUS" key for key code 12', () => {
      expect(keyCodeInfo(12).name).to.equal('MINUS');
      expect(keyCodeInfo(12).char).to.equal('-');
    });

    it('should return "TAB" key for key code 15', () => {
      expect(keyCodeInfo(15).name).to.equal('TAB');
      expect(keyCodeInfo(15).char).to.equal('\t');
    });

    it('should return "ENTER" key for key code 28', () => {
      expect(keyCodeInfo(28).name).to.equal('ENTER');
      expect(keyCodeInfo(28).char).to.equal('\n');
    });
  });

  describe('#listAllKnownKeys()', () => {

    it('should list 145 keys', () => {
      expect(listAllKnownKeys()).to.have.lengthOf('145');
    });

    it('first key should be ESC', () => {
      const firstKeyInfo = listAllKnownKeys()[0];
      expect(firstKeyInfo.code).to.equal(1);
      expect(firstKeyInfo.name).to.equal('ESC');
      expect(firstKeyInfo.char).to.equal('');
    });
  });

});
