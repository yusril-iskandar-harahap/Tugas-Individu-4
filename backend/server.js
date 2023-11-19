const express = require("express")
const mysql = require("mysql")
const BodyParser = require("body-parser")

const app = express();

app.use(BodyParser.urlencoded({ extended: true}))

app.set("view engine", "ejs")
app.set("views", "views")

const db = mysql.createConnection({
    host: "localhost",
    database: "tugas_individu_4",
    user: "root",
    password: "",
})

db.connect((err) => {
    if (err) throw err
    console.log('database connected...')

    app.get("/", (req, res) => {
        const sql = "SELECT * FROM data_buku"
        db.query(sql, (err, result) => {
            const users = JSON.parse(JSON.stringify(result))
            console.log('hasil database -> ', users)
            res.render("index", {users: users, title: "Tugas Individu 4"})  
        })
    })

    app.post("/tambah", (req, res) => {
        const insertSql = `INSERT INTO data_buku (Judul, Author, Terbit) VALUES ('${req.body.judul}','${req.body.author}', '${req.body.terbit}');`
        db.query(insertSql, (err, result) => {
            if (err) throw err 
            res.redirect("/")
        })
    }) 
})

app.listen(8000, () => {
    console.log("server ready...")
})