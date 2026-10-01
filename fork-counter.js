// Counts how many times the octocat has been clicked and shows it under the greeting.
document.addEventListener('DOMContentLoaded', () => {
  const octocat = document.getElementById('octocat');
  const counter = document.getElementById('fork-count');
  let forks = Number(localStorage.getItem('spoonKnifeForks') || 0);
  const render = () => { counter.textContent = `Forked ${forks} time${forks === 1 ? '' : 's'}`; };
  octocat.addEventListener('click', () => {
    forks += 1;
    localStorage.setItem('spoonKnifeForks', String(forks));
    render();
  });
  render();
});
