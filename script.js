const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) {
        alert('請輸入待辦事項! ');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = text;

    // 點擊文字切換完成狀態
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // 新增刪除按鈕
    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.className = 'delete-btn';

    delBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 避免點刪除時觸發完成切換
        todoList.removeChild(li);
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
}