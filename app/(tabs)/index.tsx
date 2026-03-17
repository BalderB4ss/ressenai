import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Menu de navegação */}
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Perfil</Text>
        <Text style={styles.menuItem}>Configurações</Text>
      </View>

      {/* Conteúdo */}
      <Text style={styles.title}>Meu Restaurante</Text>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Container principal */
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  /* Menu de navegação */
  menu: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#0038eeff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  menuItem: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* Título */
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  /* Botão */
  button: {
    backgroundColor: "#0038eeff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});