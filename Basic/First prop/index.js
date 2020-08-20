class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='AWSM ' from='bACKOFF' />
        <Hello to='Funny' from='DIE' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
