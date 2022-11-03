function getCompany (type, callback) {
    document.getElementById(type).addEventListener('click',function(){
        callback();
    })
}
getCompany("beijing",showBeijing)
function showBeijing(){
    document.querySelector('.showdialog').style.display = "block"
    document.querySelector('#zyzz').innerHTML =
    '<ul><li>' + '制作H5单页宣传页' + '</li>'
    + '<li>' + '快方送药APP 内嵌活动页' + '</li>'
    + '<li>' + '官网页面维护，按照设计图书写静态页面' + '</li>'
    + '<div>涉及技术： html, css , canvas ,js ,jquery </div>'
    + '</ul>'
}
getCompany("hangzhou",showHangzhou)
function showHangzhou(){
    document.querySelector('.showdialog').style.display = "block"
    document.querySelector('#zyzz').innerHTML =
    '<ul><li>' + '开发季节节日等活动页面H5' + '</li>'
    + '<li>' + '数据交互实现动态页面效果 完成功能前后端交互' + '</li>'
    + '<li>' + '编写内部前端脚手架工具 规范开发项目' + '</li>'
    + '<div>涉及技术： html, css , grunt ,js ,jquery ,vue, webpack</div>'
    + '</ul>'
}
getCompany("suzhou",showSuzhou)
function showSuzhou(){
    document.querySelector('.showdialog').style.display = "block"
    document.querySelector('#zyzz').innerHTML =
    '<ul><li>' + '根据需求开发二开定制页面和功能' + '</li>'
    + '<li>' + '研发内部组件 迭代维护' + '</li>'
    + '<li>' + '参与产品2.0升级公共组件研发' + '</li>'
    + '<li>' + '封装sdk，调取协议 完成PC端 移动端 与产品和客户app 交互等功能' + '</li>'
    + '<li>' + '公司定制部门前端产线发布 内部工具研发' + '</li>'
    + '<div>涉及技术： html, css , grunt ,js ,jquery ,vue, webpack，gulp， less, git, svn,移动端, pc端</div>'
    + '</ul>'
}

document.querySelector('.xxxx')
.addEventListener('click',function(){
    document.querySelector('.showdialog').style.display = "none"
})