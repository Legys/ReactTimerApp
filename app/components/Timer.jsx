var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState() {
        return {
            count: 0,
            timerStatus: 'stopped',

        };
    },
    componentDidUpdate(prevProps, prevState) {

      if (this.state.timerStatus !== prevState.timerStatus) {
          switch (this.state.timerStatus) {
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
    componentWillUnmount() {
        clearInterval(this.timer);
    },
    handleSetTimer(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    startTimer() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000)

    },

    handleStatusChange(newTimerStatus) {
        this.setState({timerStatus: newTimerStatus})
    },
    render() {
        var {count, timerStatus} = this.state;
            return (
                <div>
                    <h1 className="page-title">Timer App</h1>
                    <Clock totalSeconds={count} />
                    <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
                </div>
            )
    }
});

module.exports = Timer;