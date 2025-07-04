import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


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
    <NoteList notes={notes} />
    
    <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
    </TouchableOpacity>

    {/* Modal */}
    <AddNoteModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      newNote={newNote}
      setNewNote={setNewNote}
      addNote={addNote}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
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