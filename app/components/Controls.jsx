var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render() {
        var {countdownStatus} = this.props;
        var renderStartButton = () => {
          if (countdownStatus === 'started') {
              return <button className="button secondary">Pause</button>
          }   else if (countdownStatus === 'pause') {
              return <button className="button primary">Start</button>
          }
        };
        
        return (
            <div className="controls">
                {renderStartButton()}
                <button className="button alert hollow">Clear</button>
            </div>

        )
    }
});
module.exports = Controls;