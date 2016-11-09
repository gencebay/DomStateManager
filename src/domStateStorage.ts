import { DomExplorer } from './utils/domExplorer';

class DomStateStorage {
    private _domExplorer: DomExplorer;
    constructor(public greeting: string, domExplorer: DomExplorer) {
        this._domExplorer = domExplorer;
    }
    init() {
        this.explore();
        return "<h1>" + this.greeting + "</h1>";
    }

    private explore() {
        var doms = this._domExplorer.processOperator("body");
        console.log("Body dom object is: ", doms);
    }
};

var greeter = new DomStateStorage("Welcome!!", new DomExplorer());
document.body.innerHTML = greeter.init();