import Game, { 
  GameSavingData, 
  readGameSaving as loadGame, 
  writeGameSaving as saveGame 
} from './game.js';

const game = new Game();
game.start();

// Демонстрация работы с импортированными сущностями
const saving = new GameSavingData();
console.log('GameSavingData created:', saving);

console.log('Calling loadGame:');
loadGame();

console.log('Calling saveGame:');
saveGame();