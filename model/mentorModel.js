var dbConnection = require('../dbConfig');

class Mentor {

        getAllMentor() {
            return new Promise (
                async (resolve, reject) => {
                    const sql = 'SELECT * FROM mentor';
                    try {
                        var result = await dbConnection.query(sql);
                        resolve(result[0]);
                    } catch (err) {
                        reject(err);
                    }
                }
            )
        }
}

module.exports = new Mentor();