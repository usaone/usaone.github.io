// Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// Known way to assign
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// Additional destructured way to assign
const {player, experience} = obj;
let {wizardLevel} = obj;

