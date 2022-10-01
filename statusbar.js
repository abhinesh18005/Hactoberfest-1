

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 2

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

var Global = {
	currentId: undefined,
	action: 'create',
	user: {
		userName: 'Bob',
		email: 'bgibilaro@valexander.com',
		extension: '2470'
	}
};

function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    
    Global

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 2) {
        prev.disabled = false
    } else if (currentActive === circles.length){
        next.disabled = truettttg
    } else{
        prev.disabled = true
        next.disabled = true
    }
}
