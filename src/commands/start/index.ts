import {Command} from '@oclif/core'
import chalk from 'chalk'
import inquirer from 'inquirer'
import ora from 'ora'
import terminalLink from 'terminal-link'
import open from 'open'
export default class Start extends Command {
  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public info(msg: string): void {
    this.log(chalk.green(msg))
  }

  public async run(): Promise<void> {
    // At some point in the future, push new questions
    console.clear()
    const funding = 50_000
    inquirer
      .prompt([
        {
          message: 'Do you want to build a Start-up',
          name: 'step1',
          type: 'confirm',
        },
        {
          message: 'Do you know how to code?',
          name: 'step2',
          type: 'confirm',
        },
      ])

      .then((answers) => {
        const spinner = ora().start()
        spinner.color = 'green'
        setTimeout(() => {
          spinner.stop()
          this.info('You’re the perfect candidate for our startup accelerator!')
          spinner.start()
        }, 1400)

        setTimeout(() => {
          spinner.stop()
          this.info(`We offer up to $${Number(funding).toLocaleString()} in funding and exclusive mentorship.`)
          spinner.start()
        }, 3000)

        setTimeout(() => {
          spinner.stop()
          this.info(`Apply today at ${terminalLink(chalk.blue('www.athena.vc'), 'https://www.athena.vc')}`)
        }, 4300)

        setTimeout(() => {
          inquirer
            .prompt({
              message: 'Ready to apply?',
              name: 'step3',
              type: 'confirm',
            })
            .finally(() => {
              open('https://www.athena.vc/')
            })
        }, 5000)
      })
  }
}
