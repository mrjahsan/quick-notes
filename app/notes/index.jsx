import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NotesScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', text: 'Note One' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState("");

    // Add new note
    const addNote = () => {
      if (newNote.trim() === "") return;

      setNotes((prevNotes) => [
        ...prevNotes,
        { id: Date.now().toString(), text: newNote }
      ]);

      setNewNote("");
      setModalVisible(false);
    };     
    
  return (
  <View style={styles.container}>
    <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.noteItem}>
                <Text style={styles.noteText}>{item.text}</Text>
            </View>
        )}
    />
    <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
    </TouchableOpacity>
    {/* Modal */} 
    <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add New Note</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter your note here.."
                    placeholderTextColor="#aaa"
                    value={newNote}
                    onChangeText={setNewNote}
                />
                <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}> 
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={addNote}> 
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
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
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ff8c00",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#ff8c00",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default NotesScreen;