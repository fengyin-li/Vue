
//数字余两位小数--param1:需要转换的数字
const toDecimal = (x)=>{
    let f = Math.round(x * 100) / 100;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
};
//验证手机号--param1:手机号;
const checkTel = (tel)=>{
    if (tel != "") {
        if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(tel)) || (/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(tel)) || (/^\d{3,4}-\d{3,4}-\d{3,4}$/.test(tel))){ 
            return true
        }else{
            return false
        }
    } else {
        return true
    }
}
//验证邮箱--param1:邮箱;
const checkMail = (mail)=>{
    let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/ ;
    if(reg.test(mail)){ 
        return true
    }else{
        return false
    }
}
//获取localStorage
const getLoca = (name) =>{
    return localStorage.getItem(name)
}
//设置localStorage
const setLoca = (name,val) =>{
   localStorage.setItem(name,val)
}
//删除localStorage
const delLoca = (name) =>{
    localStorage.removeItem(name)
}

export {
    toDecimal,checkTel,checkMail,getLoca,setLoca,delLoca
}