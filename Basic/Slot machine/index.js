class App extends React.Component{
	render(){
		return (
			<div>
			<h1>Slot machine</h1>
			<Machine/
			x='gintama'
			z='zura'
			y='katsura'
			>
			</div>
			)
	}
}
ReactDOM.render(<App/>,document.getElementbyId('root'));