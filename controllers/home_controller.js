const TodoLists = require('../models/todo')

// To render the Home page 
module.exports.home = function(req,res){

    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        return res.render('home',{
        title: "Home",
        todo_list : todo,
        alert: false,alertTitle: "", alertMessage: ""
    })
});

}
// To get the Date value in months name format
function DateValeu(dueDate){
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec'] // static value for implementing monthe value


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+'-'+monapp+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}
// To create TodoLoist and render the home Page and send a alert message 
module.exports.createTodo = function(req,res){
    dueDate =req.body.dateValue.split('-'); // splitting date and taking months value
    let newdate='';
    newdate= DateValeu(dueDate);     
    TodoLists.create({ // crating new todo and storing into DB
        desc:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    },function(err,newArr){
        if(err){
            console.log('Oops error occoured');
            return;
        }
        TodoLists.find({},function(err,todo){
            if(err){
                console.log('error in fetching data');
                return
            }
            return res.render('home',{
            title: "Home",
            todo_list : todo,
            alert: true,alertTitle: "Created", alertMessage: "Item created successfully"
        })
    });
    })

}
// Deleting from the TodoList and rendering the homePage
module.exports.deleteTodo = function(req,res){ 

    TodoLists.findByIdAndDelete(req.params.id,function(err){
            if(err){
                console.log('err')
                return;
            }
    })
    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        return res.render('home',{
        title: "Home",
        todo_list : todo,
        alert: true,alertTitle: "Deleted", alertMessage: "Item Deleted Successfully"
    })
});
}
// when we go to the update page we need to show the date in numbers rather than names
function OldDate(dueDate){
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec']
    for(let i = 0;i<12;i++){
        if(months[i] == dueDate[1]){
            dueDate[1] = i+1;
        }
    }
    newdate =dueDate[2]+'-'+"0"+dueDate[1]+'-'+dueDate[0] 
    return newdate
}
// To render the edit page when we click the edit button
module.exports.EditPage = function(req,res){ // here we are fetching the data whic need to be edited
    TodoLists.findById(req.query.id,function(err,todoLists){
        newD = todoLists.dueDate.split("-") 
        todoLists.dueDate = OldDate(newD)
        if(err){ console.log('hi man!! it an error'); return}
        return res.render('edit_Page',{
        title:'Edit Page',
        todolist:todoLists
        })
    })
}
// To get the details from update page and render the home page
module.exports.editDetails = function(req,res){
    
    dueDate =req.body.dateValue.split('-');
    let newdate='';
    newdate= DateValeu(dueDate);     
     TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:newdate}} ,function(err,todoData){
        if(err){console.log('error while updating'); return}
    })
    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        return res.render('home',{
        title: "Home",
        todo_list : todo,
        alert: true,alertTitle: "Edited", alertMessage: "Item Edited Successfully"
    })
});
}