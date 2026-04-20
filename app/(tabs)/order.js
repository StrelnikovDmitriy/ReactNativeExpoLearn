import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import CardOrder from '../../components/CardOrder';
import Header from '../../components/Header';

export default function Order() {
  const [fullName, onChangeFullName] = React.useState('');
  const [tellNummber, onChangetellNummber] = React.useState('');

  return (
    <View style={styles.container}>
      <Header />
      <CardOrder />
      <View style={styles.infoUsers}>
        <View style={styles.inputBlock}>
          <Text style={styles.inputLabel}>Полное имя</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFullName}
            placeholder="Введите имя"
            value={fullName}
          />
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.inputLabel}>Номер телефона</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangetellNummber}
            placeholder="Введите номер телефона"
            value={tellNummber}
          />
        </View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Заказать (1198 руб.)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  infoUsers: {
    marginTop: 38,
    gap: 13,
  },
  inputBlock: {
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#868686',
  },
  inputLabel: {
    fontFamily: 'SFProText500',
    fontSize: 12,
    lineHeight: 22,
    color: '#868686',
  },
  input: {
    fontFamily: 'SFProText400',
    fontSize: 16,
    lineHeight: 24,
  },
  btn: {
    marginTop: AuthenticatorAssertionResponse,
    paddingVertical: 7,
    backgroundColor: '#22A45D',
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Roboto700',
    fontSize: 14,
    textAlign: 'center',
  },
});