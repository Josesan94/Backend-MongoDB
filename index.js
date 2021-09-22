 const mongoose = require('mongoose');
  const password = require('./config/config').MONGOPASS;
 const app = require('./app'); 
 var  PORT = 3200;
 const URL =`mongodb+srv://josebackend:${password}@first.3ro3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  async function con() {
      try{
          await mongoose.connect(URL, {});

          console.log('la conexion a la base de datos se realizo correctamente');
          

          app.listen(PORT, () => {
              console.log('Server started on port ' + PORT + '')
          });
      }
      catch(err){
          console.log('error al conectar a la base de datos', err);
      }
    };
     
      con();
     
    
    
    
   
    
    
    
    
   
