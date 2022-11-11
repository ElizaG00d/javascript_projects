function dictionary_1() {
    var Transformer = {
        Planet: "Cybertron",
        Color: "Red",
        Type: "Land Vehicle",
        Optics: "Blue",
    };
    delete Transformer.Optics;
    document.getElementById("Dictionary").innerHTML = Transformer.Type;
}