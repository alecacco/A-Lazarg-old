import React, { Component } from 'react'; 
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base';
import MyApp from '../App'; 

export default class PrincipalHeader extends Component { 
	constructor(props) {
		super(props);
	}

	render() { 
		//const { navigate } = this.props.navigation;
		const { title } = this.props;
		
		return (
			<Header style={{width: '100%', height: 70, backgroundColor: 'white'}}> 
				<Left> 
					<Button transparent /*onPress={() => navigate('DrawerOpen')}*/> 
						<Icon name='menu' style={styles.title}/> 
					</Button> 
				</Left> 
				<Body> 
					<Text style={styles.title}>{title}</Text> 
				</Body> 
				<Right></Right>
			</Header>
		); 
	} 
}

const styles = StyleSheet.create({
	title: {
		fontSize: 27,
		color: 'black'
	},
});