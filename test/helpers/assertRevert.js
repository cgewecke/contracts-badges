module.exports = {
  assertRevert: async (promise) => {
    try {
      await promise;
      assert.fail('Expected revert not received');
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error.message);
      const revertFound = error.message.search('revert') >= 0;
      assert(revertFound, `Expected "revert", got ${error} instead`);
    }
  },
};
