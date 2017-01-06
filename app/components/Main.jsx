var React = require('react');
var Navigation = require('Navigation')

var Main = (props) => {
    return (
        <div>
             <Navigation/>
            {props.children}
        </div>
        )
}

module.exports = Main;