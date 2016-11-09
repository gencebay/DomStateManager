/// <reference path="../../typings/index.d.ts" />

export class DomExplorer {
    private defaultSelector:string;
    constructor() {
        this.defaultSelector = "mySelector";
    }

    public processOperator(selector: string) : NodeListOf<Element> {
        // querySelectorAll with selector key
        var $dom = $(selector);
        return document.querySelectorAll(selector);
    }
}