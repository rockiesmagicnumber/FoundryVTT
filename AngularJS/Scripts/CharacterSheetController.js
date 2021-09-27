"use strict";

var CharacterSheetApp = angular
    .module('characterSheetApp', [])
    .controller("CharacterSheetController", ['$scope', '$http', ($scope, $http) => {

        $scope.populateCharacter = () => {
            if (!!tanwenData) {
                $scope.foo = "bar";
                $scope.charName = tanwenData.name;
                $scope.myAbilities = tanwenData.abilities;
                $scope.background = tanwenData.details.background;
                $scope.race = tanwenData.details.race;
                $scope.alignment = tanwenData.details.alignment;
                $scope.xp = tanwenData.details.xp.value;

                $scope.classLevel = () => {
                    if ($scope.class && $scope.level)
                        return `${$scope.class} ${$scope.level}`;
                    else
                        return "Commoner 1";
                }
            }
        }

        function getProfBonus(level) {
            Math.ceil(level / 4) + 1;
        }

        function getData() {
            const characterName = game.users.current.character.data.name;
            if (!!game && !!game.data && !!game.data.actors) {
                var myChar = game.data.actors.find(x => x.name === characterName);
                if (!!myChar) {
                    var myCharClass = myChar.items.filter(x => x.type === "class")[0];

                    var char = {};
                    char.name = characterName;
                    char.class = myCharClass.name;
                    char.level = myCharClass.data.levels;
                    char.playerName = game.users.current.name;
                    char.race = myChar.data.details.race;
                    char.alignment = myChar.data.details.alignment;
                    char.xp = myChar.data.details.xp.value;
                    char.profBonus = getProfBonus(char.levels);
                    char.abilities = {
                        str: {
                            score: myChar.abilities.str.value,
                            mod: myChar.abilities.str.mod,
                            savingThrow: myChar.abilities.str.mod
                        },
                        dex: {
                            score: myChar.abilities.dex.value,
                            mod: myChar.abilities.dex.mod,
                            savingThrow: myChar.abilities.dex.mod
                        },
                        con: {
                            score: myChar.abilities.con.value,
                            mod: myChar.abilities.con.mod,
                            savingThrow: myChar.abilities.con.mod
                        },
                        wis: {
                            score: myChar.abilities.wis.value,
                            mod: myChar.abilities.wis.mod,
                            savingThrow: myChar.abilities.wis.mod
                        },
                        int: {
                            score: myChar.abilities.int.value,
                            mod: myChar.abilities.int.mod,
                            savingThrow: myChar.abilities.int.mod
                        },
                        cha: {
                            score: myChar.abilities.cha.value,
                            mod: myChar.abilities.cha.mod,
                            savingThrow: myChar.abilities.cha.mod
                        }
                    };

                    var classDetails = {};
                    $http.get("https://www.dnd5eapi.co/api/classes/" + myCharClass.name).then(response => {
                        if (!!response && !!response.saving_throws) {
                            classDetails = response;
                            classDetails.saving_throws.forEach(sv => {
                                char.abilities[sv.index].savingThrow += getProfBonus(char.levels);
                            });
                        }
                    });

                    char.skills = myChar.data.skills; // there is seriously no point in reinventing THIS wheel
                    char.ac = myChar.data.attributes.ac;
                    char.initiative = myChar.data.attributes.init.mod;
                    char.speed = myChar.data.attributes.speed;
                    char.currentHp = myChar.data.attributes.hp.value;
                    char.maxHp = myChar.data.attributes.hp.max;
                    char.hitDice = myChar.data.attributes.hd;

                    while (!classDetails) { continue; }

                    console.log(char);
                }
            }
        }
    }]);