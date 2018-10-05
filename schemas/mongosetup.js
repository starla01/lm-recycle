/**************************************************************************************************
* @name: mongosetup
* @description: startup for the servivce application
/*************************************************************************************************/
// import mongoose package
import mongoose from 'mongoose';
import ip from 'ip';
// mongo connect and setup database
mongoose.connect(`mongodb://${ip.address()}:27017/loyalty`);
