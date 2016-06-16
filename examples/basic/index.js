import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from '../../lib/index';

(function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<InfiniteScroll />, app);
}());
