const arr = [4, 11, 42, 72, 25, 7, 8];

// შევქმნათ ფუნქცია რომელიც გამოითვლის გადაცემულ მასივში მაქსიმუმს და მინიმუმს

function answer(arr) {
  let largest = Math.max(arr);
  let smallest = Math.min(arr);
  const result = `ყველაზე დიდი რიცხვია ${largest}, ყველაზე პატარა რიცხვია ${smallest}`;
  return result;
}
console.log(answer());
answer(arr);
