import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 16,
  },
  button: {
    backgroundColor: "#E23C44",
    height: 56,
    width: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
