const Encuesta =require('../models/encuesta');
const Pregunta=require('../models/pregunta');


const allencuestas=async(req,res)=>{
 
    const encuestas=await Encuesta.find();
    console.log(encuestas);
    return res.json(
        {
            ok:true,
            encuestas:encuestas
           
        }
    );
   }
   const getencuesta=async(req,res)=>{
     const {id}=req.params;
     
     var encuesta=await Pregunta.find({"encuesta.id":id});
     console.log(encuesta);
   
    
   
     return res.json(
         {
             ok:true,
             encuesta:encuesta

             
         }
     );
   
   }
   
   module.exports={
    allencuestas,
    getencuesta
   }