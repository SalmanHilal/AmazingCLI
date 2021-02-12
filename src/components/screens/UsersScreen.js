import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {
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
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.singleField}>
                        <FontAwesome5 name={'envelope'} brand size={20} color="gray" style={styles.icon} />
                        <TextInput
                            placeholder="john@abc.com"
                            value={this.state.email}
                            onChange={this.onInputchange}
                            style={styles.field}
                        />
                    </View>
                </View>
                <Text>Home Screen</Text>
                <Button icon="information-variant" color="skyblue" mode="contained" onPress={() => this.props.navigation.navigate("About")}>About</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
    },
    label:{
        minWidth:'100%',
        textAlign: 'left',
        paddingLeft: 43,
        fontSize: 13,
        marginBottom: -5
    },
    icon:{
        display: 'flex',
        paddingTop: 16,
        paddingHorizontal:10
    },
    field: {
        flex: 1,
        maxHeight: 60,
    },
    singleField:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 3,
    },

});