const btn = document.querySelector('.formBtn');
btn.addEventListener('submit', submit, a)
const url = 'http://localhost:3000/people';
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'REGISTER-UP-FOR-KEY',
		'X-RapidAPI-Host': 'localhost:3000/people'
	}
};

async function submit() {
    const res = await fetch(url, options)
    const result = await res.json()
    alert("dobavili", result)
}
function a(data) {
    const c = fetch(res, {
        body:data
    })
}

const applicantForm = document.getElementById('qwe')
applicantForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()

    const serializeData = serializeForm(applicantForm)
    submit(serializeData)
}

function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element

            return { name, value }
        })

    console.log(data)
    return data
}

