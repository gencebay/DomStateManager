import { DomExplorer } from './utils/domExplorer';
import * as $ from 'jquery';

class DomStateStorage {
    private _domExplorer: DomExplorer;
    constructor(public greeting: string, domExplorer: DomExplorer) {
        this._domExplorer = domExplorer;
        this.init();
    }
    init() {
        this.explore();
        document.body.innerHTML = "<h1>" + this.greeting + "</h1>";
    }

    private explore() {
        // 
        var doms = this._domExplorer.processOperator("body");
        console.log("Body dom object is: ", doms);
    }
};

// The actual domStateStorage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.
export let domStateStorage = new DomStateStorage("Hello World", new DomExplorer());