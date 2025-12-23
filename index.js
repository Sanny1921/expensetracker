let exphistorydiv= document.getElementById('expparent')
let incomeform = document.getElementById('incomeform')
let expenseform = document.getElementById('expenseform')
let userincomedetails= JSON.parse(localStorage.getItem("userincomedetails")) || []
let userexpensedetails= JSON.parse(localStorage.getItem("userexpensedetails")) || []


function saveuserincomedetails() {
    localStorage.setItem("userincomedetails",JSON.stringify(userincomedetails))
}

function saveuserexpensedetails() {
    localStorage.setItem("userexpensedetails",JSON.stringify(userexpensedetails))
}

incomeform.addEventListener('submit',(e)=>{
    e.preventDefault()
    let incomeamount= document.getElementById('income')
    if (incomeamount.value.length){
        savetotalincome(incomeamount.value)

        let date= new Date()
        userincomedetails.push({userincome : incomeamount.value, incomedate: date.toLocaleDateString()})
        saveuserincomedetails()
        console.log(localStorage.getItem('userincomedetails'))
        incomeamount.value=""
        totalincomeamm()
        updatebalance()
    }
})

expenseform.addEventListener('submit',(e)=>{
    e.preventDefault()
    let expenseamount= document.getElementById('expense')
    let expensereason = document.getElementById('expensemes')

    if (expenseamount.value.trim().length){
        savetotalexpense(expenseamount.value)

        let date= new Date()
        userexpensedetails.push({id: Date.now(), userexpense: Number(expenseamount.value), userexpensereason: expensereason.value, expensedate: date.toLocaleDateString(),time: date.toLocaleTimeString()})
        saveuserexpensedetails()
        console.log(localStorage.getItem('userexpensedetails'))
        expenseamount.value=""
        expensereason.value=""
    }
    // console.log(typeof(expense.value))
    totalexpendedamm()
    exphistorydisplay()
    updatebalance()
})

function savetotalexpense(exp){
    let texp= JSON.parse(localStorage.getItem('usertotalexpense'))
    let ttexp = Number(texp)+Number(exp)
    console.log(ttexp)
    localStorage.setItem("usertotalexpense", JSON.stringify(ttexp))
}

function savetotalincome(income){
    let tincome= JSON.parse(localStorage.getItem('usertotalincome'))
    let ttincome = Number(tincome)+Number(income)
    console.log(ttincome)
    localStorage.setItem("usertotalincome", JSON.stringify(ttincome))
}


function exphistorydisplay(){
    exphistorydiv.innerHTML=""
    // console.log("imdisplay")
    let userexpensedetails = JSON.parse(localStorage.getItem("userexpensedetails"))
    if(userexpensedetails){
        userexpensedetails.forEach(i => {
            createboxforexp(i.id, i.userexpensereason, i.userexpense)
        });
    }

}

function createboxforexp(id, mes, expmoney){
    let div = document.createElement('div')
    div.className = 'exphistory'

    let message = document.createElement('p')
    let rate = document.createElement('p')
    let removeBtn = document.createElement('button')

    message.textContent = mes
    rate.textContent = `₹ ${expmoney}`
    removeBtn.textContent = "x"

    div.appendChild(message)
    div.appendChild(rate)
    div.appendChild(removeBtn)
    exphistorydiv.appendChild(div)

    removeBtn.addEventListener('click', () => {
        exphistorydiv.removeChild(div)
        userexpensedetails = userexpensedetails.filter(item => item.id !== id)
        saveuserexpensedetails()
        recalculatetotalexpense()
        updatebalance()
    })
}

exphistorydisplay()


function recalculatetotalexpense(){
    let total = userexpensedetails.reduce((sum, item) => sum + Number(item.userexpense),0)
    localStorage.setItem('usertotalexpense', JSON.stringify(total))
    totalexpendedamm()
}


let tincome = document.getElementById('totalincome')
let texpense = document.getElementById('totalexpense')
let balance = document.getElementById('balance')

function totalexpendedamm(){
    if(localStorage.getItem('usertotalexpense')){
        texpense.textContent=`₹${localStorage.getItem('usertotalexpense')}`
    }
    else{
        texpense.textContent=`₹0`
    }
}
totalexpendedamm()

function totalincomeamm(){
    if(localStorage.getItem('usertotalincome')){
        tincome.textContent=`₹${localStorage.getItem('usertotalincome')}`
    }
    else{
        tincome.textContent=`₹0`
    }

}
totalincomeamm()


function updatebalance(){
    let income = JSON.parse(localStorage.getItem('usertotalincome')) || 0
    let expense = JSON.parse(localStorage.getItem('usertotalexpense')) || 0
    balance.textContent = `₹${income - expense}`
}
updatebalance()


document.getElementById('clearall').addEventListener('click',()=>{
    localStorage.removeItem("usertotalincome")
    localStorage.removeItem("usertotalexpense")
    localStorage.removeItem("userincomedetails")
    localStorage.removeItem("userexpensedetails")
    updatebalance()
    totalincomeamm()
    totalexpendedamm()
})
