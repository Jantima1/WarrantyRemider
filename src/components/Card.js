import React, {useState} from "react";
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const WarrantyCard = () => {
    return (
        <ScrollView>
            <Card>
                <Card.Title>LIST 1</Card.Title>
                <Card.Divider />
            </Card>
            <Card>
                <Card.Title>LIST 2</Card.Title>
                <Card.Divider />
            </Card>
        </ScrollView>
    )
}
export{WarrantyCard}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
  });