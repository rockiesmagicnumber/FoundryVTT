"use strict";

var CharacterSheetApp = angular
    .module('characterSheetApp', [])
    .controller("CharacterSheetController", ['$scope', '$http', ($scope, $http) => {

        function getProfBonus(level) {
            return Math.ceil(level / 4) + 1;
        }

        function getData() {
            if (!!game && !!game.data && !!game.data.actors) {
                const characterName = game.users.current.character;
                myChar = game.users.current.character;

            } else {
                characterDB.open();
            }
        }

        $scope.populateCharacter = () => {
            if (!!myChar) {
                //var myCharClass = myChar.items.filter(x => x.type === "class")[0];

                $scope.name = myChar.name;
                var myCharClass = Array.from(myChar.items).find(x => x.type === "class");
                $scope.class = myCharClass.name;
                $scope.level = myCharClass.data.levels;
                $scope.background = myChar.data.details.background;
                $scope.playerName = "";
                $scope.race = myChar.data.details.race;
                $scope.alignment = myChar.data.details.alignment;
                $scope.xp = myChar.data.details.xp.value;
                $scope.inspired = !!myChar.data.attributes.inspiration;
                $scope.profBonus = getProfBonus($scope.level);

                $scope.abilities = {};

                for (let ability in myChar.data.abilities) {
                    $scope.abilities[ability] = {
                        score: myChar.data.abilities[ability].value,
                        mod: myChar.data.abilities[ability].mod,
                        savingThrow: myChar.data.abilities[ability].mod + (myChar.data.abilities[ability].proficient ? $scope.profBonus : 0),
                        proficient: myChar.data.abilities[ability].proficient,
                    };
                    $scope.abilities[ability].plusMinus = ($scope.abilities[ability].savingThrow >= 0 ? "+" : "");
                }

                $scope.IsSavingThrow = (skill) => {
                    return skill === 1;
                }

                $scope.skills = myChar.data.skills; // there is seriously no point in reinventing THIS wheel
                $scope.passivePerception = 10 + $scope.abilities.wis.mod;
                $scope.ac = myChar.data.attributes.ac;
                $scope.initiative = myChar.data.attributes.init.mod;
                $scope.speed = myChar.data.attributes.speed;
                $scope.currentHp = myChar.data.attributes.hp.value;
                $scope.maxHp = myChar.data.attributes.hp.max;
                $scope.hitDice = myChar.data.attributes.hd;
            }
        }

        function getDataFromGame() {}

        function getDataFromDatabase() {
            var request = db.transaction([""])
        }

        function saveDataToDatabase() {

        }
    }]);