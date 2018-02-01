import assert from 'assert';
import dotNet from '../index';

describe('dotNet', () => {
  it('resolves EntityFramework to https://www.nuget.org/packages/EntityFramework', () => {
    assert.deepEqual(dotNet.resolve({ target: 'EntityFramework' }), [
      'https://www.nuget.org/packages/EntityFramework',
    ]);
  });

  it('resolves Stanford.NLP.CoreNLP to https://www.nuget.org/packages/Stanford.NLP.CoreNLP', () => {
    assert.deepEqual(dotNet.resolve({ target: 'Stanford.NLP.CoreNLP' }), [
      'https://www.nuget.org/packages/Stanford.NLP.CoreNLP',
    ]);
  });
});
