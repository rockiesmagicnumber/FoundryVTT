var popupulateSheet = () => {
    let myCharData = CHARACTERSHEETDATA;
    let myChar = new Character();
    console.log(myChar);
    myChar.name = "Tanwen Moncrief";

    let myAbilities = Ability[6];

    console.log(myCharData);

    if (!!myCharData) {
        let str = new Ability();
        str = myCharData.abilities.str;
        myAbilities.push(str);

        let con = new Ability();
        con = myCharData.abilities.con;
        myAbilities.push(con);
    };
}