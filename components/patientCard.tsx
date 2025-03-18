import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface PatientCardProps {
  nome: string;
  sexo: string;
  naturalidade: string;
  localNascimento: string;
  dataNascimento: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  nome,
  sexo,
  naturalidade,
  localNascimento,
  dataNascimento,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}><Text style={styles.label}>Nome:</Text> {nome}</Text>
        <Text style={styles.text}><Text style={styles.label}>Sexo:</Text> {sexo}</Text>
        <Text style={styles.text}><Text style={styles.label}>Naturalidade:</Text> {naturalidade}</Text>
        <Text style={styles.text}><Text style={styles.label}>Local de Nascimento:</Text> {localNascimento}</Text>
        <Text style={styles.text}><Text style={styles.label}>Data de Nascimento:</Text> {dataNascimento}</Text>
        <Image source={require("../assets/profile-pfp.png")} style={styles.image} />
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.8, // 80% da largura da tela
    backgroundColor: "#3498db",
    borderRadius: 20,
    padding: 15,
  },
  infoContainer: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
});

export default PatientCard;
