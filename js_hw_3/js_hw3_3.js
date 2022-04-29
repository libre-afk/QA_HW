//TASK 3

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


  // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
  // Для предприятия посчитать сумму всех сотрудников во всех отделах.

  console.log(`===============1===============`)
  enterprises.forEach(e => {
      let numberOfEmployee = e.departments.reduce(function (sum, current) {
          return sum + current.employees_count;
      }, 0);
      let enterprise = `Предприятие ${e.name} (${numberOfEmployee} сотрудников)\n`
      e.departments.forEach(d => enterprise += `- ${d.name} (${d.employees_count}) сотрудников\n`
      )
      console.log(enterprise);
  });

 // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела 
 // и возвращать название предприятия, к которому относится).
 
 console.log(`===============2===============`)
 const getEnterpriseName = function (id) {
     let name = "";
     enterprises.forEach(e => {
         e.departments.forEach(d => {
             if (d.id == id)
                 name = e.name;
         })
     });
     return name;
 }
 console.log(getEnterpriseName(2));


//3. Написать функцию, которая будет добавлять предприятие. 
// В качестве аргумента принимает название предприятия

console.log(`===============3===============`)
let addEnterprise = function (name) {
    let id = 0;
    do {
        id++;
    } while (enterprises.map(e => e.id).includes(id))
    enterprises.push({id: id, name: name, departments: []})

}
addEnterprise("OOO");
enterprises.forEach(e => console.log(e));

// 4. Написать функцию, которая будет добавлять отдел в предприятие. 
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

console.log(`===============4===============`)
let addDepartment = function (id, department) {
    let idNew = 0;
    do {
        idNew++;
        console.log(enterprises.flatMap(e => e.departments.map(d => d.id)))
    } while (enterprises.flatMap(e => e.departments.map(d => d.id)).includes(idNew))
    console.log(enterprises.forEach(e => {
        if (e.id === id)
            e.departments.push({id: idNew, name: department, employees_count: 0})
    }));
}

addDepartment(5, "Check department");
enterprises.forEach(e => console.log(e));

// 5. Написать функцию для редактирования названия предприятия. 
// Принимает в качестве аргумента id предприятия и новое имя предприятия.

console.log(`===============5===============`)
let editEnterprise = function (id, name) {
    enterprises.forEach(e => e.id === id ? e.name = name : "")
}

editEnterprise(5, "OOO!!!!");
enterprises.forEach(e => console.log(e));

// 6. Написать функцию для редактирования названия отдела. 
// Принимает в качестве аргумента id отдела и новое имя отдела.

console.log(`===============6===============`)
let editDepartment = function (id, name) {
    enterprises.forEach(e => {
        e.departments.forEach(d => {
            if (d.id === id)
                d.name = name;
        })
    });
}

editDepartment(7, "OOO!!!!");
enterprises.forEach(e => console.log(e));

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

console.log(`===============7===============`)
let deleteEnterprise = function (id) {
    let index = enterprises.findIndex(e => e.id === id);
    enterprises.splice(index, 1);
}

deleteEnterprise(2);
enterprises.forEach(e => console.log(e));


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
// Удалить отдел можно только, если в нем нет сотрудников.

console.log(`===============8===============`)
let deleteDepartment = function (id) {
    enterprises.forEach(e => {
        let index = e.departments.findIndex(e => e.id === id && e.employees_count === 0);
        if (index === 0) {
            e.departments.splice(index, 1);
        }
    })
}

deleteDepartment(10);
enterprises.forEach(e => console.log(e));


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, 
// в который будут переноситься сотрудники).

console.log(`===============9===============`)
let moveEmployees = function (idFirstDepartment, idSecondDepartment) {
    let num = enterprises.flatMap(e => e.departments).filter(d => d.id === idSecondDepartment).map(d => d.employees_count).pop();
    enterprises.forEach(e => {
        e.departments.forEach(d => {
            if (d.id === idFirstDepartment)
                d.employees_count += num
            if (d.id === idSecondDepartment)
                d.employees_count = 0
        })
    })
}
moveEmployees(6, 2);
enterprises.forEach(e => console.log(e));