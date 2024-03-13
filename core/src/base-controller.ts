import autoBind from 'auto-bind';

export abstract class BaseController {
  constructor() {
    /**
     * Using `autoBind` to bind all methods to the instance of the class
     * No need to use `.bind(this)` in the constructor
     */
    autoBind(this);
  }
}
