import * as actions from './actions';
import reducer from './reducer';
import view from './views/container';

/**
 * 这个index.js作为模块输出的接口
 * 其他模块导入这个模块目录('todolist/')的时候默认加载的就是index.js
 * 比如: import { actions, reducer, view as Todolist} from './todolist';
 */
export { actions, reducer, view };