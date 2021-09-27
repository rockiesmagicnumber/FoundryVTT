function getData() {
	const characterName = game.users.current.character.data.name;
    if (!!game && !!game.data && !!game.data.actors) {
        var myChar = game.data.actors.find(x => x.name === characterName);
        if (!!myChar) {
            var char = {};
            var myCharClass = myChar.items.filter(x => x.type === "class")[0];
            char.name = characterName;
            char.class = myCharClass.name;
            char.level = myCharClass.data.levels;
            char.playerName = game.users.current.name;
            char.race = myChar.data.details.race;
            char.alignment = myChar.data.details.alignment;
            char.xp = myChar.data.details.xp.value;

            console.log(char);
        }
    }
}

