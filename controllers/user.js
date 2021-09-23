

/* function getUsers(req,res) {
    
        let usersFromDB = [
            { name: 'Juan', age: 20 },
            { name: 'Pedro', age: 30 },
            { name: 'Jose', age: 30 }
        ];
        res.send(usersFromDB);
} 

function getUser(req,res) {
    let usersFromDB = { name: 'Juan', age: 20 };
    res.send(usersFromDB);
}
function deleteUser(req,res) {
res.send('llamada a borrar un usuario');
} */

const user = require('../models/user');
var User=require('../models/user');
console.log('llamado a addUser');
async function addUser(req,res){ //funcion para añadir un usuario
    let user = new User ({
        name: 'Jhon',
    surname: 'doe',
    email: '@got',
    dir: 'josecolo',
    dir_num: '22',
    Status: 'true',
    pets: ['cat','dog'],
    })
    
    await user.save();
    res.send({user
    , ok:true,
      msg: 'el usuario se cargo correctamente'});
    console.log('Usuario guardado correctamente');
}


async function getUsers(req,res) { //funcion para obtener muchos usuarios
    /* "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2, */
    let users = await User.find({})
    console.log(users);  
    console.log('getUsers');

    const total= users.length;
    const per_page = 2;
    const total_pages = Math.ceil(total/ per_page);
    res.status(200).send({
        ok:true,
        msg: 'Se obtuvieron los usuarios',
        users,
        total,
        per_page,
        total_pages,
    })
}


function getUser(req,res) { // buscar un usuario en particular
    const id = req.params.id;
    //const id = '614b99ed303074038abce64e';
    User.findById(id, (error, user) =>{
        if(error) return res.status(504).send({
            ok:false,
            msg:'Error al obtener usuario',
            error
        });

        return res.status(200).send ({
            ok:true,
            msg:'Usuario obtenido correctamente de la DB',
            user
        })
    })

}          
module.exports = {
    /* getUsers,
    getUser,
    deleteUser */
    addUser,
    getUsers,
    getUser,
}
