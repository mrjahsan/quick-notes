import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NoteItem = ({ note, onDelete }) => {
    return (
    <View style={styles.noteItem}>
        <Text style={styles.noteText}>{note.text}</Text>
        <TouchableOpacity onPress={() => onDelete(note.$id)}>
            <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
    </View> 
    );
};

const styles = StyleSheet.create({
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f0f0f0",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
      noteText: {
        fontSize: 18,
    },
    delete: {
        color: "red",
        fontSize: 18,
    },
});
    
    


export default NoteItem;