// 구조 분해 할당

const response = {
    notifications : {
        follow : true,
        alert : true,
        unfollow : false
    },
    user : {
        name : "youn"
    }, 
    test : {
        follow : true
    }

}

// if(response.notifications.follow){
//     console.log("sending email");
// } else {
//     console.log("this is error");
// }
let notificationsFollow;
let testFollow;
( {
    notifications : {
        follow: notificationsFollow = false,
    } = {},
    test : {
        follow: testFollow = false,
    } = {}
} = response);

if(testFollow){
    console.log("sending email");
} else {
    console.log("this is error");
}