var characterDB = (function() {
    var tDB = {};
    var datastore = null;

    /**
     * Open a connection to the datastore.
     */
    tDB.open = function(callback) {
        // Database version.
        var version = 1;

        // Open a connection to the datastore.
        var request = indexedDB.open('character', version);

        // Handle datastore upgrades.
        request.onupgradeneeded = function(e) {
            var db = e.target.result;

            e.target.transaction.onerror = tDB.onerror;

            // Delete the old datastore.
            if (db.objectStoreNames.contains('character')) {
                db.deleteObjectStore('character');
            }

            // Create a new datastore.
            var store = db.createObjectStore('character', {
                keyPath: 'charName'
            });
        };

        // Handle successful datastore access.
        request.onsuccess = function(e) {
            // Get a reference to the DB.
            datastore = e.target.result;

            // Execute the callback.
            callback();
        };

        // Handle errors when opening the datastore.
        request.onerror = tDB.onerror;
    };

    /**
     * Fetch ONE character item in the datastore
     */
    
    tdb.fetchOneCharacter=(charName,callback){
        var db = datastore;
        var transaction = db.transaction(['character'], 'readwrite');
        var objStore = transaction.objectStore('character');

        // TODO: I'm tired. Research pulling *one* character from the db by key (key: myChar)
    }

    /**
     * Fetch all of the character items in the datastore.
     */
    tDB.fetchAllCharacters = function(callback) {
        var db = datastore;
        var transaction = db.transaction(['character'], 'readwrite');
        var objStore = transaction.objectStore('character');

        var keyRange = IDBKeyRange.lowerBound(0);
        var cursorRequest = objStore.openCursor(keyRange);

        var character = [];

        transaction.oncomplete = function(e) {
            // Execute the callback function.
            callback(character);
        };

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;

            if (!!result == false) {
                return;
            }

            character.push(result.value);

            result.continue();
        };

        cursorRequest.onerror = tDB.onerror;
    };

    /**
     * Create a new character item.
     */
    tDB.createCharacter = function(charName, charDetails, callback) {
        // Get a reference to the db.
        var db = datastore;

        // Initiate a new transaction.
        var transaction = db.transaction(['character'], 'readwrite');

        // Get the datastore.
        var objStore = transaction.objectStore('character');

        // Create a timestamp for the character item.
        var timestamp = new Date().getTime();

        // Create an object for the character item.
        var character = {
            'charName': charName,
            'charDetails': charDetails
        };

        // Create the datastore request.
        var request = objStore.put(character);

        // Handle a successful datastore put.
        request.onsuccess = function(e) {
            // Execute the callback function.
            callback(character);
        };

        // Handle errors.
        request.onerror = tDB.onerror;
    };

    /**
     * Delete a character item.
     */
    tDB.deleteCharacter = function(id, callback) {
        var db = datastore;
        var transaction = db.transaction(['character'], 'readwrite');
        var objStore = transaction.objectStore('character');

        var request = objStore.delete(id);

        request.onsuccess = function(e) {
            callback();
        }

        request.onerror = function(e) {
            console.log(e);
        }
    };

    // Export the tDB object.
    return tDB;
}());