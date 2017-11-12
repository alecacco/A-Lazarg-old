import React, { Component } from 'react'; 
import { Container, Content, Button, Icon, Text } from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid'; 
import PrincipalHeader from '../components/PrincipalHeader';

export default class FreeRoomsScreen extends Component { 
	constructor(props) {
		super(props);
	}

	render() { 

		return (
			<Container> 
				<PrincipalHeader title='Free Room'/>
        		<Content>       
		        	<Grid style={{height: '100%'}}>		        		
		        		
		        	</Grid>
		        </Content>
	        </Container>
		); 
	} 
}