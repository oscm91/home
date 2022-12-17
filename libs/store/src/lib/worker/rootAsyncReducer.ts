import { wrap } from 'comlink';
const workerReducer = new Worker(new URL('../reducers/workerReducer.js', import.meta.url));

let singletonWorker = null;
let singletonBlocker = false;

async function getAsyncReducer() {
  if (!singletonWorker && !singletonBlocker) {
    singletonBlocker = true;
    singletonWorker = await wrap(workerReducer);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(singletonWorker);
    }, 0);
  });
}

export default getAsyncReducer;
