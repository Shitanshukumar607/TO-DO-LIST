const InputEl = document.getElementById("input");

const AddEl = document.getElementById("add");

const Con2 = document.getElementById("con2");


AddEl.addEventListener("click", start)
function start() {

    if (InputEl.value !== "") {
            Con2.innerHTML += `

            <div class="one">

                 <div class="taskcon">
                     <p> <i class="fa-solid fa-circle"></i>  ${InputEl.value}</p>
                  </div>

            <div class="buttoncon">
            <button class="delete"  onclick="deleted()"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>

                </div>
                    `
        
            let tasks = document.querySelectorAll('.delete')
            for (let i = 0; i < tasks.length; i++) {
                tasks[i].onclick = function () {
                    this.parentNode.parentNode.remove()
                }
                
            }
             

                }
                InputEl.value = ""
    }

