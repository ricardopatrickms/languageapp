import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#75dafe' },
    navbar: { flex: 0.4 },
    title: { color: 'white', textAlign: 'center', fontSize: 15, marginBottom: 20 },
    questionTitle: { color: 'white', textAlign: 'center', fontSize: 25 },
    questionText: { color: 'white', textAlign: 'center', fontSize: 25, marginBottom: 40, marginTop: 40 },
    answers: { flexDirection: 'row', justifyContent: 'center' },
    footerText: { color: 'white', fontWeight: 'bold', marginBottom: 15, marginLeft: 5 },
});
