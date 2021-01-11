import { StyleSheet } from "react-native";
import { Colors, TextStyles } from "../../common";

export const CommonCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    borderColor: Colors.border,
    minWidth: "60%",
    maxWidth: "80%",
    maxHeight: "90%",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: 16,
    shadowColor: Colors.input,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 24,
    elevation: 5,
    justifyContent: "space-around",
    backgroundColor: Colors.cardBackround,
    flexDirection: "column",
  },
  cardBorder: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: Colors.border,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "35%",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    maxHeight: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondaryButton,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  textStyles: TextStyles.H1,
});
