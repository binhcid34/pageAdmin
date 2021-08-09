const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
})
const conn = require('./controler/connectDatabase')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

io.on('connection', socket => {
    console.log('connection made successfully')
    socket.on('message', (data) => {
        const { iduser, content, idreceive } = data;    
        var id = '';
        var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890';
        for (let i = 0; i < 12; i++) {
            id += _sym[parseInt(Math.random() * (_sym.length))];
        }
        conn.query(`insert into chat (iduser, content, id_chat, ngaydang) values ('${iduser}', '${content}', '${id}', now())`, (err, data) => {
            if (err) throw err
            io.sockets.in(iduser).emit('message', [{ iduser: iduser, id_chat: id, content: content }])
            conn.query(`update user set so_thongbao = so_thongbao + 1 where iduser = '${idreceive}'`, (err, data) => {
                if(err) throw err
            })
        })
    })
    socket.on('createroom', data => {
        socket.join(data.iduser);
        socket.join(data.idreceive);
        console.log(socket.adapter.rooms)
    })
    socket.on('chatting', (data) => {
        socket.broadcast.emit('chatting', data)
    })
    socket.on('disconnect', () => {
        console.log(socket.id + "close")
    })
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.post('/getcomment', function (req, res) {
    conn.query(`select user_name, idbinh_luan, idbinh_luan_cha, noi_dung, ngay_binh_luan, anh_dai_dien from binh_luan INNER join user on binh_luan.iduser = user.iduser where idsan_pham = '${req.body.idsan_pham}'`, function (err, data) {
        res.send(data)
    })
})
app.post('/getcart', function (req, res) {
    conn.query(`select x.idsan_pham, x.namesan_pham, x.gia_ca, z.link_anh, x.idthe_loai from san_pham x inner join gio_hang y on x.idsan_pham = y.idsanpham INNER join doi_tuong_hinh_anh z on x.idsan_pham = z.idsan_pham where z.anh_chinh = '1' and y.iduser = '${req.body.iduser}'`, function (err, data) {
        if (err) throw err
        res.send(data)
    })
})
app.post('/insertcomment', function (req, res) {
    var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var id = '';
    for (let i = 0; i < 20; i++) {
        id += _sym[parseInt(Math.random() * (_sym.length))];
    }
    var sql = `insert into binh_luan (idbinh_luan, idbinh_luan_cha, noi_dung, iduser, idsan_pham, ngay_binh_luan) values('${id}', '${req.body.id_comment_root}','${req.body.content}','${req.body.iduser}', '${req.body.idsan_pham}' , now())`;
    if (!req.body.id_comment_root) sql = `insert into binh_luan (idbinh_luan, idbinh_luan_cha, noi_dung, iduser, idsan_pham, ngay_binh_luan) values('${id}', ${req.body.id_comment_root},'${req.body.content}','${req.body.iduser}', '${req.body.idsan_pham}' , now())`
 
    conn.query(sql, function (err, data) {
        if (err) throw err
        conn.query(`select user_name, idbinh_luan, idbinh_luan_cha, noi_dung, ngay_binh_luan, anh_dai_dien from binh_luan INNER join user on binh_luan.iduser = user.iduser where idbinh_luan = '${id}'`, function (err, data) {
            res.send(data)  
        })
    })
})
app.post('/product/getImage', (req, res) => {
    conn.query(`select link_anh from doi_tuong_hinh_anh where idsan_pham = '${req.body.idsan_pham}'`, (err, data1) => {
        if (err) throw err
        conn.query(`select user_name, anh_dai_dien, iduser from user where iduser = (select iduser from san_pham where idsan_pham = '${req.body.idsan_pham}')`, (err, data2) => {
            if (err) throw err
            res.send({ images: data1, user: data2[0] })
        })
    })
})
app.post('/getuser', (req, res) => {
    conn.query(`select * from user where iduser = '${req.body.id}'`, (err, data) => {
        res.send(data);
    })
})
app.post('/insertimage', (req, res) => {
    var sql = `insert into doi_tuong_hinh_anh (idsan_pham, link_anh, anh_chinh) values ('${req.body.id}', '${req.body.url}', '${req.body.anhchinh}')`
    conn.query(sql, (err, data) => {
        if(err) throw err
    })
    console.log(sql)
})
app.post('/inserttitle', (req, res) => {
    var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var id = '';
    for (let i = 0; i < 20; i++) {
        id += _sym[parseInt(Math.random() * (_sym.length))];
    }
    const {tensanpham, motasanpham, giasanpham, tinhtrang, theloai} = req.body;     
    var sql =`insert into san_pham (idsan_pham, namesan_pham, gia_ca, tinh_trang_san_pham, thoi_gian_dang, idthe_loai, iduser, mo_ta_chi_tiet) values ('${id}', '${tensanpham}', '${giasanpham}', '${tinhtrang}', now(), '${theloai}', 'admin', '${motasanpham}')`;
    conn.query(sql, function(err, data) {
        if(err) throw err
        res.send({id: id});
    })
})
app.post('/insertAndRemoveCart', (req, res) => {
    var sql = '';
    if(req.body.add)  sql = `insert into gio_hang (idsanpham, iduser) values ('${req.body.idsanpham}', '${req.body.iduser}')`;
    else sql = `delete from gio_hang where iduser = '${req.body.iduser}' and idsanpham = '${req.body.idsanpham}'`
    conn.query(sql, (err, data) => {
        if(err) throw err
         res.send({})
    })
})
app.get('/getproduct', (req, res) => {
    conn.query('SELECT * from san_pham inner join doi_tuong_hinh_anh on san_pham.idsan_pham = doi_tuong_hinh_anh.idsan_pham WHERE anh_chinh = 1;', (err, data) => {
        res.send(data);
    })
})
app.get('/getuser', (req, res) => {
    conn.query('SELECT * FROM `user`;', (err, data) => {
        res.send(data);
    })
})
app.post('/getmyproducts', (req, res) => {
    conn.query(`SELECT * from san_pham inner join doi_tuong_hinh_anh on san_pham.idsan_pham = doi_tuong_hinh_anh.idsan_pham where iduser = '${req.body.iduser}' and anh_chinh = 1`, (err, data) => {
        res.send(data);
    })
})
app.post('/getchat', function (req, res) {
    conn.query('select * from chat', (err, data) => {
        res.send(data)
    });
})

app.post('/user/signin', function (req, res) {
    conn.query(`select * from user where email = '${req.body.email}' and password ='${req.body.password}'`, (err, data) => {
        if (data.length === 0) res.send({ error: true })
        else res.send(data[0])
    })
})
app.post('/delete', (req,res) => {
    var sql = `Delete From san_pham where idsan_pham = '${req.body.idsan_pham}'`;
    conn.query(sql, function(err, results) {
        if (err) throw err;
        res.json({san_pham: results});
    })
})
app.post('/insert', (req, res) =>{
    var sql =`INSERT into san_pham VALUES ('${req.body.idsan_pham}','${req.body.namesan_pham}','${req.body.gia_ca}','${req.body.tinh_trang_san_pham}','${req.body.thoi_gian_dang}',${req.body.idthe_loai},'${req.body.iduser}','${req.body.mo_ta_chi_tiet}')`;
    conn.query(sql, function(err, results) {
        if(err) throw err;
        res.json({san_pham: results});
    })
})
app.post('/edit', (req,res) =>{
    var sql = `UPDATE san_pham SET namesan_pham = "${req.body.namesan_pham}", gia_ca = '${req.body.gia_ca}', tinh_trang_san_pham = '${req.body.tinh_trang_san_pham}', thoi_gian_dang = '${req.body.thoi_gian_dang}', idthe_loai=${req.body.idthe_loai}, iduser='${req.body.iduser}',mo_ta_chi_tiet='${req.body.mo_ta_chi_tiet}' WHERE idsan_pham='${req.body.idsan_pham}';`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({san_pham: results});
    })
})
app.post('/deleteUser', (req, res) => {
    var sql = `Delete from user where iduser = '${req.body.iduser}'`;
    conn.query(sql, function(err, results) {
        if (err) throw err;
        res.json({user: results});
    })
})
app.post('/insertUser', (req,res) => {
    var sql =`INSERT into user VALUES ('${req.body.iduser}','${req.body.user_name}','${req.body.password}','${req.body.anh_dai_dien}','${req.body.email}','${req.body.is_admin}','${req.body.so_thongbao}')`;
    conn.query(sql, function(err, results) {
        if(err) throw err;
        res.json({san_pham: results});
    })
})
app.post('/edit', (req,res) =>{
    var sql = `UPDATE user SET user_name = "${req.body.user_name}", password = '${req.body.password}', anh_dai_dien = '${req.body.anh_dai_dien}', email = '${req.body.email}', is_admin=${req.body.is_admin},so_thongbao='${req.body.so_thongbao}' WHERE iduser='${req.body.iduser}';`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({san_pham: results});
    })
})
app.get('/getTotalUser',(req,res) => {
    conn.query('SELECT COUNT(iduser) as users, sum(so_thongbao) as so_thongbao FROM `user`;', (err, data) => {
        res.send(data);
    })
})
app.get('/getTotalProduct', (req,res) => {
    conn.query('SELECT COUNT(idsan_pham) as products FROM `san_pham`;', (err, data) => {
        res.send(data);
    })
})
app.get('/getTotalOrder', (req, res) =>{
    conn.query('SELECT COUNT(id_yeu_cau) as orders FROM `yeu_cau_trao_doi`', (err, data) => {
        res.send(data);
    })
})

app.get('/getTotalBinhluan', (req, res) =>{
    conn.query('SELECT COUNT(idbinh_luan) as comments FROM `binh_luan`', (err, data) => {
        res.send(data);
    })
})

app.get('/getTotalBinhluan', (req, res) =>{
    conn.query('SELECT COUNT(idbinh_luan) as comments FROM `binh_luan`', (err, data) => {
        res.send(data);
    })
})

app.get('/getTotalChat', (req, res) =>{
    conn.query('SELECT COUNT(id_chat) as chat FROM `chat`', (err, data) => {
        res.send(data);
    })
})

// Lay so luong san pham trong tung thang
app.get('/getTime', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 1', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeFeb', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 2', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeMar', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 3', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeApr', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 4', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeMay', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 5', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeJun', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 6', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeJul', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 7', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeAug', (req, res) => {
    conn.query('SELECT count(idsan_pham) as jan FROM `san_pham` WHERE MONTH(thoi_gian_dang) = 8', (err, data) => {
        res.send(data);
    })
})

// Lay so luong order trong tung thang

app.get('/getTimeOrder', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 1', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderFeb', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 2', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderMar', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 3', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderApr', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 4', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderMay', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui)= 5', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderJun', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 6', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderJul', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui) = 7', (err, data) => {
        res.send(data);
    })
})
app.get('/getTimeOrderAug', (req, res) => {
    conn.query('SELECT COUNT(id_yeu_cau) as jan FROM `yeu_cau_trao_doi` WHERE MONTH(thoi_gian_gui)= 8', (err, data) => {
        res.send(data);
    })
})

server.listen(7000, () => {
    console.log('I am listening at port: 7000)');
})
