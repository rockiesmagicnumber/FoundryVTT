function getCharacterData() {
    Array.from(this.game.actors).filter(x => { return x.data.name === "Tanwen Moncreif"; })[0].data.data;
}