var dbConnection = require('../dbConfig');
var web3js = require('./web3');

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

    getMentorData() {
        return new Promise (
            async (resolve, reject) => {
                const sql = 'SELECT * FROM mentor WHERE code = ?';
                try {
                    var result = await dbConnection.query(sql, [data]);
                    resolve(result[0]);
                } catch (err) {
                    reject(err);
                }
            }
        )
    }

    mentorUp(data) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    console.log(data.name)
                    var web3Data = await web3js.makeAccounts(data.name);
                    console.log('wallet :', web3Data)
                    const sql = 'INSERT INTO mentor (name, location, specialty, lecture, consulting, career, keyword, code, wallet) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
                    await dbConnection.query(sql, [data.name, data.location, data.specialty, data.lecture, data.consulting, data.career, data.keyword, data.code, web3Data]);
                    resolve('done');
                } catch (err) {
                    reject(err);
                }
            }
        )
    }
}
module.exports = new Mentor();