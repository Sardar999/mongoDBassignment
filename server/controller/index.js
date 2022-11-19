let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index', { title: 'Home' }); 
}




module.exports.displayMVPAward = (req,res,next)=>{
  res.render('mvp', { title: 'MVPAward' }); 
}









// module.exports.displayAboutPage = (req, res, next) =>{
//     res.render('aboutme', { 
//       title: 'About Me' });
// }

// module.exports.displayContactPage = (req, res, next) =>{
//     res.render('Contacts', { 
//       title: 'Contact Me' });
// }

// module.exports.displayProjectsPage = (req, res, next) =>{
//     res.render('Projects', { 
//       title: 'Projects' });
// }


