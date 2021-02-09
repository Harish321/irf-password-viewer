try{
    var _____extension_global_toggle = false;
    var _____attempts = 0;
    var interval = setInterval(()=>{
        let loginBox = document.getElementsByClassName('pass-form');
        if(loginBox.length > 0){
            var primaryDiv = loginBox[0];
            var eyeIcon    = document.createElement("i");
            eyeIcon.className = "fa fa-eye-slash"
            eyeIcon.style = style = "font-size: 20px; position: absolute; margin-top: -26px; text-align: left; margin-left: 300px; cursor: pointer; color:grey"
            eyeIcon.addEventListener("click",(e) =>{
                var elem = e.target;
                var passElem = elem.previousElementSibling;
                passElem.type = _____extension_global_toggle ? 'password' : 'text'
                elem.className = passElem.type == 'password' ? 'fa fa-eye-slash' : "fa fa-eye"
                _____extension_global_toggle = !_____extension_global_toggle;
            })
            primaryDiv.insertBefore(eyeIcon,primaryDiv.lastElementChild);
            clearInterval(interval)
        }
        _____attempts++;
        if(_____attempts == 10)
            clearInterval(interval);
    },3000)
}catch(err){
    // 
}