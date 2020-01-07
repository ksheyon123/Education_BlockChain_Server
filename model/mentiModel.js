var dbConnection = require('../dbConfig');

class Menti {

    requestList() {
        return new Promise (
            async (resolve, reject) => {
                const sql = 'SELECT * FROM menti';
                try {
                    var result = dbConnection.query(sql);
                    resolve(result[0]);
                } catch (err) {
                    reject(err);
                }
            }
        )
    }

}

module.exports = new Menti();