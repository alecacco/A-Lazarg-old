import React, { Component  } from 'react'; 
import { Image, StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Body, Button } from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid'; 

export default class StartScreen extends Component { 
  render() { 

    return ( 
      <Container>
        <Image source={require('../images/backgroundStart.png')} style={styles.backgroundImage}/>
          <Grid style={{height: '100%'}}>
            <Row style={{height: '30%'}}>
            </Row>
            <Row style={{height: '70%' }}>
              <Col style={{width: '100%'}}>
                <Text style={styles.welcomeText}>Hi I'm Clara.</Text>
                <Text style={styles.welcomeText}>I'll help you</Text>
                <Text style={styles.welcomeText}>find a room</Text>
              </Col>
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
});
