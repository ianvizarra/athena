import {Command} from '@oclif/core'
import chalk from 'chalk'
import inquirer from 'inquirer'
import open from 'open'
import ora from 'ora'
import terminalLink from 'terminal-link'
export default class Start extends Command {
  static override description = 'Apply to Athena.vc'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public info(msg: string): void {
    this.log(chalk.green(msg))
  }

  public async run(): Promise<void> {
    console.clear()
    const funding = 50_000
    inquirer
      .prompt([
        {
          message: 'Do you want to build a Startup',
          name: 'step1',
          type: 'confirm',
        },
        {
          message: 'Do you know how to code?',
          name: 'step2',
          type: 'confirm',
        },
      ])

      .then(() => {
        const spinner = ora().start()
        spinner.color = 'green'
        setTimeout(() => {
          spinner.stop()
          this.info('\n> You’re the perfect candidate for our startup accelerator!')
          spinner.start()
        }, 1400)

        setTimeout(() => {
          spinner.stop()
          this.info(`> We offer up to $${Number(funding).toLocaleString()} in funding and exclusive mentorship.`)
          spinner.start()
        }, 3000)

        setTimeout(() => {
          spinner.stop()
          this.info(`> Apply today at ${terminalLink(chalk.blue('www.athena.vc'), 'https://www.athena.vc')}`)
        }, 4300)

        setTimeout(() => {
          inquirer
            .prompt({
              message: '\n> Ready to apply?',
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
