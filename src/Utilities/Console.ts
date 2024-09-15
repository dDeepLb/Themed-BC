const STYLES = {
  INFO: 'color: #32CCCC',
  LOG: 'color: #CCCC32',
  DEBUG: 'color: #9E4BCF'
};

const cmdPrefix = 'Themed';

export function conInfo(...args: any[]) {
  if (typeof args[0] === 'string') console.info(`%c${cmdPrefix}: ${args[0]}`, STYLES.INFO, ...args.slice(1));
  else console.info(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
}

export function conLog(...args: any[]) {
  if (typeof args[0] === 'string') console.log(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
  else console.log(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
}

export function conWarn(...args: any[]) {
  if (typeof args[0] === 'string') console.warn(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
  else console.warn(`%c${cmdPrefix}: `, STYLES.LOG, ...args);
}

export function conErr(...args: any[]) {
  if (typeof args[0] === 'string') console.error(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
  else console.error(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
}

export function conDebug(...args: any[]) {
  if (IS_DEVEL) {
    if (typeof args[0] === 'string') console.debug(`%c${cmdPrefix}: ${args[0]}`, STYLES.DEBUG, ...args.slice(1));
    else console.debug(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
}
