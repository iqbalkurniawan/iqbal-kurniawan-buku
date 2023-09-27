const dataModel = require('../models/data');
class ExampleController {

  static async index(req, res) {
    return res.status(200).json({
      message: "Okay",
      data: {
        id: 1,
        name: "Example"
      }
    })
  }

  static async list(req, res) {
    const {id, jenis} = req.params;
    let data = dataModel;
    
    if(id){
        data = data.filter((row, key)=>{
          return (row.id == parseInt(id))?true:false
        })
        // console.log(data)
    }

    if(jenis){
      data = data.filter((row, key)=>{
        return (row.type == jenis)?true:false
      })
      // console.log(data)
    }
    return res.status(200).json({
        message: "Success",
        data: data
    })
  }

  static async update(req, res) {
      const{id} = req.params;
      const input = req.body;
      let data = dataModel;

      for(let i=0;i<data.length;i++){
          if(data[i].id == parseInt(id)){
              data[i].name = input
          }
      }
     
      return res.status(200).json({
          message: "Success",
          data: data
      })
 
  }

  static async simpan(req, res){
    const input = req.body;
    let data = dataModel;
    // console.log(input.id='coba')
    let tambahData = {
      id: data[data.length-1].id+1,
      name: input.name,
      type: input.type
    }
    // console.log(input)
    // console.log(data[data.length-1].id)
    // console.log(tambahData)
    data.push(tambahData)
    return res.status(200).json({
        message: "Success",
        data: data
    })
  }

  static async delete(req, res){
    const{id} = req.params;
    let data = dataModel;
    // console.log(id)
    for(let i=0;i<data.length;i++){
      if(data[i].id == parseInt(id)){
           data.splice(i, 1); 
      }
    }

      return res.status(200).json({
          message: "Success",
          data: data
      })
  }
}

module.exports = ExampleController;