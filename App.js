import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('telaInicial');

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'telaInicial' && (
        <TelaInicial navigate={() => handleNavigate('telaSecundaria')} />
      )}
      {currentScreen === 'telaSecundaria' && (
        <TelaSecundaria navigate={() => handleNavigate('telaInicial')} />
      )}
    </View>
  );
};

const TelaInicial = ({ navigate }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Tela Inicial</Text>
      <TouchableOpacity style={styles.button} onPress={navigate}>
        <Text style={styles.buttonText}>Ir para a Tela Secundária</Text>
      </TouchableOpacity>
    </View>
  );
};

const TelaSecundaria = ({ navigate }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Tela Secundária</Text>
      <TouchableOpacity style={styles.button} onPress={navigate}>
        <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
