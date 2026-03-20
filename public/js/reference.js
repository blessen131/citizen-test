(function () {
    const container = document.getElementById('qa-container');

    function renderQuestions(data) {
        const fragment = document.createDocumentFragment();

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'question-box';

            const title = document.createElement('h3');
            title.textContent = `${item.id}. ${item.question}`;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'toggle-btn';
            btn.textContent = 'Show Answers';

            const ansWrap = document.createElement('div');
            ansWrap.className = 'answers';
            ansWrap.hidden = true; // hidden by default

            const ul = document.createElement('ul');
            item.answers.forEach(ans => {
                const li = document.createElement('li');
                li.textContent = ans;
                ul.appendChild(li);
            });
            ansWrap.appendChild(ul);

            btn.addEventListener('click', () => {
                const isHidden = ansWrap.hidden;
                ansWrap.hidden = !isHidden;
                btn.textContent = isHidden ? 'Hide Answers' : 'Show Answers';
            });

            box.appendChild(title);
            box.appendChild(btn);
            box.appendChild(ansWrap);

            fragment.appendChild(box);
        });

        container.appendChild(fragment);
    }
    renderQuestions(window.quiz || []);
})();
