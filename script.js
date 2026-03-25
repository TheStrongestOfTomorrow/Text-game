import { gameData } from './engine.js';

document.addEventListener('DOMContentLoaded', () => {
    const storyEl = document.getElementById('story');
    const choicesEl = document.getElementById('choices');
    const statsEl = document.getElementById('stats');
    const ageEl = document.getElementById('age-tag');
    const historyEl = document.getElementById('history');

    let state = { boldness: 0, patience: 0, married: false };
    let history = [];

    function renderNode(nodeId) {
        const node = gameData[nodeId];
        if (!node) return;
        
        storyEl.classList.remove('animate-fade');
        void storyEl.offsetWidth; 
        storyEl.classList.add('animate-fade');
        
        storyEl.innerText = node.text;
        ageEl.innerText = `Age: ${node.age}`;
        choicesEl.innerHTML = '';
        statsEl.innerText = `Boldness: ${state.boldness} | Patience: ${state.patience} | Married: ${state.married ? 'Yes' : 'No'}`;

        if (!node.options || node.options.length === 0) {
            const btn = document.createElement('button');
            btn.className = 'btn-restart';
            btn.innerText = 'RESTART NEW LIFE';
            btn.onclick = () => location.reload();
            choicesEl.appendChild(btn);
        } else {
            node.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'btn-choice';
                btn.innerText = opt.text;
                btn.onclick = () => {
                    history.push(opt.text);
                    historyEl.innerHTML = history.map(h => `<div class=\"text-zinc-500\">> ${h}</div>`).join('');
                    if(opt.stat) state[opt.stat]++;
                    if(opt.text.toLowerCase().includes('marriage')) state.married = true;
                    renderNode(opt.next);
                };
                choicesEl.appendChild(btn);
            });
        }
    }

    renderNode('start');
});