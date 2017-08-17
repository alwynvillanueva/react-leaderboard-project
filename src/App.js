import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leaderboard/>
      </div>
    );
  }
}
const data = {
  title:'Dota 2 Leaderboard SEA SERVER',
  LastUpdated: '8/17/2017, 6:00:00 AM',
  people:[
    {
      player: 'FDG.` AlaCrity -',
      mmr:9109,
    },
    {
      player: 'BOOM.inYourdreaM.maybe?',
      mmr:8967,
    },
    {
      player: 'ChasingTheMoon',
      mmr:8713,
    },
    {
      player: 'Li.BeeBie CryBaBY',
      mmr:8519,
    },
    {
      player: '`♥vt Fαded-',
      mmr:8473,
    },
    {
      player: 'napo.tmt',
      mmr:8441,
    },
    {
      player: 'CG.Armel.牛竞技',
      mmr:8422,
    },
    {
      player: 'Fnatic.DJ',
      mmr:8343,
    },
    {
      player: 'PlayHard',
      mmr:8324,
    },
    {
      player: 'Mineski.Mushi',
      mmr:8317,
    },
  ]
};
var count=0;
let Leaderboard = React.createClass({
  getInitialState:function(){
    return(data);
  },
  render: function(){
    return(
      <div className="Leaderboard">
        <Title title={this.state.title}/>
        <List people={this.state.people}/>
        <Update LastUpdated={this.state.LastUpdated} />
      </div>
    )
  }
});
let Title = React.createClass({
  render:function(){
    return(
    <div className="Title">
      {this.props.title}
    </div>
    );
  }
});
let Update = React.createClass({
    render:function(){
    return(
    <div className="Title updates">
      Last Updated : {this.props.LastUpdated}

    </div>
    );
  }
})
let List = React.createClass({
	compareArray: function(a,b) {
		if (a.mmr < b.mmr)
			return 1;
		if (a.mmr > b.mmr)
			return -1;
		return 0;
	},
	sortArray: function() {
		return this.props.people.sort(this.compareArray);
	},
	render: function() {
		
		let peopleList = this.sortArray();
		
		let people = peopleList.map(function(person, i) {
			return <Person name={person.player} mmr={person.mmr}/>
		});
		
		return (
			<ul>
				{people}

			</ul>
		);
	}
});

let Person = React.createClass({
	render: function() {
		return (
			<li className="Person">
        {count+=1}.
				<div className="Player">{this.props.name}</div>
				<div className="mmr">{this.props.mmr}</div>
			</li>
		);
	}
})

export default App;
