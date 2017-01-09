var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'stopped',

        };
    },
    componentDidUpdate(prevProps, prevState) {

      if (this.state.countdownStatus !== prevState.countdownStatus) {
          switch (this.state.countdownStatus) {
              case 'started':
                  this.startTimer();
                  break;
              case 'stopped':
                  this.setState({count: 0});
              case 'paused':
                  clearInterval(this.timer);
                  this.timer = undefined;
                  break;

          }
      }
    },
    handleSetTimer(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    startTimer() {
        console.log('started');

        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000)

    },

    handleStatusChange(newStatus) {
        this.setState({countdownStatus: newStatus})
    },
    render() {
        var {count, countdownStatus} = this.state;
            return (
                <div>
                    <Clock totalSeconds={count} />
                    <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
                </div>
            )
    }
});

module.exports = Timer;