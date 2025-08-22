/*CRUD DATABASE Simulation application
const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		//yangi userni studentsList ga qo'shsin va  studentsList ni qaytarib yuborsin
	},

	read(name) {
		//userni studentsList dan topib qaytarib bersin!.
	},

	update(name, user) {
		// studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
	},

	delete(name) {
		// studentsList dan faqat bitta userni o'chiring! qaytarish ihtihoriy message qaytarish ihtiyoriy
		delete this.studentsList["xamidullo"]

	}

}

database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})

database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})

database.delete("xamidullo")

console.log(database.studentsList) */

let database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
}
}

create(user) {
		//yangi userni studentsList ga qo'shsin va  studentsList ni qaytarib yuborsin
	},

