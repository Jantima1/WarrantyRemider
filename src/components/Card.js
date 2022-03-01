import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const WarrantyCard = ({ dataObj }) => {
  return (
    <>
      <ScrollView style={styles.container}>
        {dataObj ? (
          <>
            {dataObj.map((raw, index) => (
              <Card key={index}>
                <Card.Title>{raw.name}</Card.Title>
                <Card.Divider />
                <Text>Purchase Date: {raw.purchaseDate}</Text>
                <Text>Expiration Date: {raw.expirationDate}</Text>
                <Text>Note: {raw.note}</Text>
              </Card>
            ))}
          </>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
};
export { WarrantyCard };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  }
});