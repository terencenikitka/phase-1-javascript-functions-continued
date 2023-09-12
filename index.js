function saturdayFun(arg){
    if(!arg)return 'This Saturday, I want to roller-skate!'
    else return 'This Saturday, I want to bathe my dog!'
}
function mondayWork(arg){
if (!arg)return `This Monday, I will go to the office.`
else return 'This Monday, I will work from home.'

}
function wrapAdjective(arg){
   if (arg==='*')return function (adj){return `You are *${adj}*!`}
   else if (arg==='||') return function (adj){return `You are ||${adj}||!`}
}