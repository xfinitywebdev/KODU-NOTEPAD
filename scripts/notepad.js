var storedNote = localStorage.getItem("storedNote");

function save(){
    var Note = document.getElementById("note").value;
    localStorage.setItem("storedNote", Note);
    document.getElementById("savedNote").innerHTML = Note;
}

function get(){
    localStorage.getItem("storedNote")
    localStorage.getItem("storedTitle")
    document.getElementById("openedNote").innerHTML = storedNote;
}
