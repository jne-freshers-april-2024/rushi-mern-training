let studentSchema = new mongoose.Schema({
    name : { type:String, required:true, trim:true},
    salary : { type:mongoose.Decimal128, required:true},
    age : { type:Number,required:true, min:18, max:50},
});    

const studentModel = mongoose.model('Student',studentSchema)

module.exports = studentModel;