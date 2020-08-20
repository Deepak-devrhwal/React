class Machine extends React.Component{
	
		render(){
			const{x,y,z}=this.props;
	const winner =(s1===s2) && (s1===s3);
		return (
			<div>
			<p>{x} {y} {z}</p>
			<p> {winner?'Winner':'Loser'}</p>
			</div>
			)
	}
}