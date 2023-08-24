import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    backgroundColor: "#131016",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  date: {
    color: "#FFF",
    fontSize: 10,
  },
  input: {
    color: "#FFF",
    backgroundColor: "#1f1e25",
    paddingLeft: 15,
    paddingRight: 2,
    height: 56,
    borderRadius: 4,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#31CF67",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    marginTop: 24,
    gap: 5,
    justifyContent: "space-between",
  },
  emptyComponent: {
    color: "#FFF",
    marginTop: 50,
    fontSize: 13,
    textAlign: "center",
  },
});
