var express = require('express');
var router = express.Router();
var con = require('./postgreSQL');

var { checkToken } = require('../config/token');

router.get('/list', (req, res) => {
    let sql = 'select * from experiencelike order by id desc';
    con.query(sql, [], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "获取失败" });
        } else {
            res.send(result.rows);
        }
    });
});

router.get('/add', (req, res) => {
    var eid = req.query.eid;
    var name = req.query.name;
    var ename = req.query.ename;
    let sql = 'insert into experiencelike(eid,name,ename) values($1,$2,$3)';
    con.query(sql, [eid, name, ename], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "添加失败" });
        } else {
            res.json({ ok: true, msg: "添加成功" });
        }
    });
});

router.get('/delete', (req, res) => {
    var eid = req.query.eid;
    var name = req.query.name;
    let sql = 'delete from experiencelike where eid=$1 and name=$2';
    con.query(sql, [eid, name], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "删除失败" });
        } else {
            res.json({ ok: true, msg: "删除成功" });
        }
    });
});

router.get('/deleteAll', (req, res) => {
    var eid = req.query.eid;
    let sql = 'delete from experiencelike where eid=$1';
    con.query(sql, [eid], (err, result) => {
        if (err) {
            res.json({ ok: false, msg: "删除失败" });
        } else {
            res.json({ ok: true, msg: "删除成功" });
        }
    });
});

module.exports = router;