// import React from "react";

// const ContentEditable = React.createElement({
//     render: function () {
//         return <div
//             onInput={this.emitChange}
//             onBlur={this.emitChange}
//             contentEditable
//             dangerouslySetInnerHTML={{ __html: this.props.html }}></div>;
//     },
//     shouldComponentUpdate: function (nextProps) {
//         return nextProps.html !== this.getDOMNode().innerHTML;
//     },
//     emitChange: function () {
//         var html = this.getDOMNode().innerHTML;
//         if (this.props.onChange && html !== this.lastHtml) {

//             this.props.onChange({
//                 target: {
//                     value: html
//                 }
//             });
//         }
//         this.lastHtml = html;
//     }
// });
// export default ContentEditable;