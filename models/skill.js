const skills = [
    {id: 978438, skill: 'HTML', done: true},
    {id: 489712, skill: 'CSS', done: false},
    {id: 100608, skill: 'JavaScript', done: false},
    {id: 235477, skill: 'MongoDB', done: true},
    {id: 613034, skill: 'Mongoose', done: true},
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find((skill) => skill.id == id);
}

function create(skillObj) {
    skillObj.id = Math.floor(Math.random() * 1000000);
    skillObj.done = false;
    skills.push(skillObj);
}

function deleteOne(id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}