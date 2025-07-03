import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from "react-native";

const NotesScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', text: 'Note One' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState("");
    
  return (
  <View style={styles.container}>
    <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.noteItem}>
                <Text>{item.text}</Text>
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
                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}> 
                    <Text style={styles.CancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={AddNote => setModalVisible(false)}> 
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
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
});

export default NotesScreen;