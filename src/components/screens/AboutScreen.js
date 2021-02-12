import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class AboutScreen extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
    }
    state = {
        email: '', searchString: ''
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                     <View style={styles.singleField}>
                        <FontAwesome5 name={'envelope'} brand size={20} color="gray" style={styles.icon} />
                        <TextInput
                            label="Email"
                            placeholder="john@abc.com"
                            value={this.state.email}
                            onChange={this.onInputchange}
                            style={styles.field}
                        />
                    </View>
                     <View style={styles.singleField}>
                        <FontAwesome5 name={'envelope'} brand size={20} color="gray" style={styles.icon} />
                        <TextInput
                            label="Password"
                            placeholder="********"
                            value={this.state.email}
                            onChange={this.onInputchange}
                            style={styles.field}
                        />
                    </View>
                </View>
                <Text>About Screen</Text>
                <Button icon="information-variant" color="skyblue" mode="contained" onPress={() => this.props.navigation.goBack()}>Go Back</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
    },
    label: {
        minWidth: '100%',
        textAlign: 'left',
        paddingLeft: 43,
        fontSize: 13,
        marginBottom: -5
    },
    icon: {
        display: 'flex',
        paddingTop: 18,
        paddingHorizontal: 15,
        zIndex: 1
    },
    field: {
        flex: 1,
        maxHeight: 60,
        paddingLeft:45,
        marginLeft: -50
    },
    singleField: {
        flexDirection: 'row',
        marginBottom:5
    },

});