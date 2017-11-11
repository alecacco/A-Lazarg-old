import React, { Component  } from 'react'; 
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Body, Button, Picker, Form, Item as FormItem } from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid'; 

const Item = Picker.Item;

export default class SelectDepartmentScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      selectedDep: undefined
    };
  }

  onValueChangeDep(value: string) {
    this.setState({
      selectedDep: value
    });
  }

  render() { 

    return ( 
      <Container>        
        <Grid style={{height: '100%'}}>
          <Row style={{height: '20%', alignItems: 'center'}}>
            <Text style={styles.title}>Select your department</Text>
          </Row>
          <Row style={{height: '30%', width: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Select One"
                note={false}
                selectedValue={this.state.selectedDep}
                onValueChange={this.onValueChangeDep.bind(this)}
                style={{width: 300}}
              >
                <Item label="Scuola di Studi Internazionali" value="studiInternazionali" />
                <Item label="Facoltà di Giurisprudenza" value="giurisprudenza" />
                <Item label="DISI" value="DISI" />
                <Item label="Economia e Management" value="economia" />
                <Item label="DICAM" value="DICAM" />
                <Item label="DII" value="DII" />
              </Picker>              
            </Form>            
          </Row>
          <Row style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Button transparent>
              <Text style={styles.findRoom}>Find room</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 27,
  },
  findRoom: {
    textAlign: 'center',
    color: '#00B2B2',
    fontSize: 27,
  },
});