import ora from "ora";
import chalk from "chalk";

/**
 * 进度条加载
 */
export function spining(options?: string | ora.Options | undefined) {
  return ora(options);
}

class Log {
  error(msg: string) {
    console.log(chalk.red(msg));
  }

  warn(msg: string) {
    console.log(chalk.yellow(msg));
  }

  primary(...msg: string[]) {
    console.log(...msg);
  }

  get chalk() {
    return chalk;
  }
}

export const log = new Log();
