import { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NoteItem = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState(note.text);
    const inputRef = useRef(null);
  
    const handleSave = () => {
        if (editedNote.trim() === "") return;
        onEdit(note.$id, editedNote);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };
  
    return (
      <View style={styles.noteItem}>
        {isEditing ? (
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={editedNote}
            onChangeText={setEditedNote}
            autoFocus
            onSubmitEditing={handleSave}
            onBlur={handleSave}
            returnKeyType="done"
          />
        ) : (
          <Text style={styles.noteText} onPress={handleEdit}>
            {note.text}
          </Text>
        )}
  
        <View style={styles.actions}>
          {isEditing ? (
            <TouchableOpacity
              onPress={() => {
                handleSave();
                inputRef.current.blur();
              }}
            >
              <Text style={styles.edit}>💾</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.edit}>✏️</Text>
            </TouchableOpacity>
          )}
  
          <TouchableOpacity onPress={() => onDelete(note.$id)}>
            <Text style={styles.delete}>❌</Text>
          </TouchableOpacity>
        </View>
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
    actions: {
        flexDirection: "row",
        gap: 10,
    },
    edit: {
        color: "orange",
        fontSize: 18,
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
});
    
    


export default NoteItem;