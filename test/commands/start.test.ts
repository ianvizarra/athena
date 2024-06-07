import {runCommand} from '@oclif/test'
import {expect} from 'chai'
import mock from 'mock-stdin'
describe('start', () => {
  it('runs start cmd', async () => {
    const stdin = mock.stdin()
    const {stdout} = await runCommand('start')
    expect(stdout).to.contain('Do you want to build a Startup')
    stdin.send('\n', 'ascii')
  })
})
