"use strict";

module.exports = () => {

    function someAction() {
        return Promise.resolve();
    }

    return {
        someAction: someAction
    }
}