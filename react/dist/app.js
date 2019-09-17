import React from 'react';
import ReactDOM from 'react-dom';
function Root(_a) {
    var message = _a.message;
    return React.createElement("div", { style: { color: 'red' } }, message);
}
ReactDOM.render(React.createElement(Root, { message: "Hello React" }), document.getElementById('app'));
//# sourceMappingURL=app.js.map