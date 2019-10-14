/**
 * Factory pattern
 * @param {string} uid
 */
function User(uid) {
    return {
        uid,
        getUser: function() {
            return {
                uid,
                username: `SuperHero ${uid}`
            }
        }
    }
}

const user = User(123);

/**
 * Contructor pattern
 * @param {string} guid
 */
function Group(guid) {
    let defaultType = 0;
    this.guid = guid;
    this.getGroup = function() {
        return {
            guid: this.guid
        }
    }
    Object.defineProperty(this, 'defaultType', {
        get: function() {
            return defaultType;
        },
        set: function(value) {
            defaultType = value;
        }
    });
}

const group = new Group('Public');

/**
 * start, stop and reset
 */
function StopWatch() {
    let startTime = endTime = 0;
    this.start = function() {
        startTime = new Date();
    }
    this.stop = function() {
        endTime = new Date();
    }
    this.reset = function() {
        startTime = 0;
        endTime = 0;
    }
    Object.defineProperty(this, 'show', {
        get: function() {
            return (endTime - startTime)/1000;
        }
    });
}

const sw = new StopWatch();