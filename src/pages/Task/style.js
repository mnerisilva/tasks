import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteTask: {
        justifyContent:"center",
        paddingLeft: 15,
    },
    DescriptionTask: {
        width: "75%",
        fontSize: 20,
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5"
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        backgroundColor: "#F92e6a",
        bottom: 30,
        left: 20,
        borderRadius: 50,
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#fff",
        fontSize: 50,
        fontWeight: "600"
    },
});

export default styles