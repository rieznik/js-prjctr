/* eslint-disable import/prefer-default-export */
const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
  tasksList.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
          <div class="form-check">
            <label class="form-check-label">
                <input class="checkbox" type="checkbox" />
                    For what reason would it be advisable.
                  <i class="input-helper"></i>
                  </label>
              </div>
  <a class="remove mdi mdi-close-circle-outline"></a>
  `;
    listElement.append(taskElement);
  });
};
