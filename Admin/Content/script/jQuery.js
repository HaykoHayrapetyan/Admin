(function () {
    'use strict';
    window.$ = function (selector) {
        if (selector instanceof Node) {
            return selector;
        }
        if ('function' === typeof selector) {
            document.on('DOMContentLoaded', selector);
            return;
        }
        if (/<\w+>/.test(selector)) {
            var matches = /\w+/.exec(selector);
            return document.createElement(matches);
        } else {
            var elements = document.querySelectorAll(selector);
        }
        return 1 == elements.length ? elements[0] : elements;
    }
    Node.prototype.find = function (selector) {
        let elements = this.querySelectorAll(selector);
        return 1 == elements.length ? elements[0] : elements;
    }
    HTMLElement.prototype.attr = function (attributeName, value) {
        this.setAttribute(attributeName, value);
        return this;
    };
    EventTarget.prototype.on = function (events, handler, bool, selector ) {
        if (Object == events.constructor) {
            bool = handler;
            selector = bool;
            for (let label in events) {
                if (events.hasOwnProperty(label)) {
                    this.addEventListener(label, events[label], bool);
                }
            }
            return this;
        }
        var evs = events.split(/\/s*,\/s*/);
        for (let eventName in evs) {
            this.addEventListener(evs[eventName], handler, bool);
        }
        return this;
        this.addEventListener(event,
            selector ?
            function (ev) { 
                if (ev.target.matches(selector)) {
                    handler.call(ev.target);
                }
            } : handler,
        false);
        return this;
    }
    EventTarget.prototype.off = function (events, handler, bool, selector) {
        if (Object == events.constructor) {
            bool = handler;
            selector = bool;
            for (let label in events) {
                if (events.hasOwnProperty(label)) {
                    this.removeEventListener(label, events[label], bool);
                }
            }
            return this;
        }
        var evs = events.split(/\/s*,\/s*/);
        for (let eventName in evs) {
            this.removeEventListener(evs[eventName], handler, bool);
        }
        return this;
        this.removeEventListener(event,
            selector ?
            function (ev) {
                if (ev.target.matches(selector)) {
                    handler.call(ev.target);
                }
            } : handler,
        false);
        return this;
    }
    Node.prototype.css = function (propertyName, value) {
        if (null == propertyName && null == value) {
            return this;
        }
        if (null == value) {
            if (Object == propertyName.constructor) {
                for (let label in propertyName) {
                    this.style[label] = propertyName[label];
                }
                return this;
            }
            return getComputedStyle(this)[propertyName];
        }
        this.style[propertyName] = value;
        return this;
    }
    HTMLElement.prototype.val = function (value) {
        if (null == value) {
            return this.value;
        }
        return (this.value = value, this);
    }
    HTMLElement.prototype.html = function (value) {
        if (null == value) {
            return this.innerHTML;
        }
        return (this.innerHTML = value, this);
    }
    Node.prototype.textCont = function (value) {
        if (null == value) {
            return this.textContent;
        }
        return (this.textContent = value, this);
    }
    Object.defineProperty(Object.prototype, 'prop', {
        value: function (propName, propValue) {
            if (null != propName) {
                if (null != propValue) {
                    return (this[propName] = propValue, this);
                }
                return this[propName];
            }
            return this;
        },
        enumerable: false
    });
    NodeList.prototype.forEach = function ($delegate, context) {
        for (let i = 0; i < this.length; i++) {
            $delegate.call(context, this[i], i, this);
        }
    }
})();



