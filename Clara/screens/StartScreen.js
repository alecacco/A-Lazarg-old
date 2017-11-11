import React, { Component  } from 'react'; 
import { Image, StyleSheet, Text } from 'react-native';
import { Container, Content, Body, Button, Icon } from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid'; 

export default class StartScreen extends Component { 
  render() { 

    return ( 
      <Container>
        <Image source={require('../images/backgroundStart.png')} style={styles.backgroundImage}/>
          <Grid style={{height: '100%'}}>
            <Row style={{height: '30%'}}>
            </Row>
            <Row style={{height: '50%' }}>
              <Col style={{width: '100%'}}>
                <Text style={styles.welcomeText}>Hi I'm Clara.</Text>
                <Text style={styles.welcomeText}>I'll help you</Text>
                <Text style={styles.welcomeText}>find a room</Text>
              </Col>
            </Row>
            <Row style={{height: '10%'}}>
              <Col style={{width: '100%'}}>
                <Button iconLeft style={styles.buttonLogin}>
                  <Icon name='logo-google'/>
                  <Text style={{color: 'white', fontSize: 18}}>Login with Google </Text>
                </Button>
              </Col>
            </Row>
            <Row style={{height: '10%'}}>
              <Button iconLeft style={styles.buttonSkipLogin} onPress={() => this.props.navigation.navigate('SelectDepartment')}>
                <Text style={styles.textSkipLogin}>Skip login </Text>
              </Button>
            </Row>
          </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 37
  },
  buttonLogin: {
    left: 100,
    backgroundColor: '#FF2500',
    width: 220,
  },
  buttonSkipLogin: {
    left: 150,
    backgroundColor: '#00B2B2',
    width: 120,
  },
  textSkipLogin:{
    width: '100%',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
