window.onload = function() {
    const container = document.querySelector('.container');
    const selection = document.querySelector('.selection');
    const selectionItems = document.querySelectorAll('.selection_item');

    mountSelection(selection, container);
    mountSelectionItems(selectionItems);
}

function mountSelection(selection, container) {
    let isResizing = false;
    let startX = 0;
    let startY = 0;

    container.addEventListener('mousedown', function(event) {
        isResizing = true;
        const viewportWidth = window.innerWidth;
        const gap = (viewportWidth - 1000) / 2;
        startX = event.clientX - gap;
        startY = event.clientY;

        selection.style.top = '0px';
        selection.style.left = '0px';
        selection.style.width = '0px';
        selection.style.height = '0px';

        selection.classList.add('selection-visible');
    });

    container.addEventListener('mousemove', function(event) {   
        if (isResizing) {    
            const viewportWidth = window.innerWidth;
            const gap = (viewportWidth - 1000) / 2;
            const width = event.clientX - startX - gap;
            const height = event.clientY - startY;

            if (width > 0) {
                selection.style.left = startX + 'px';
                selection.style.width = width + 'px';
            } else {
                selection.style.left = event.clientX - gap + 'px';
                selection.style.width = startX - (event.clientX - gap) + 'px';
            }

            if (height > 0) {
                selection.style.top = startY + 'px';
                selection.style.height = height + 'px';
            } else {
                selection.style.top = event.clientY + 'px';
                selection.style.height = startY - event.clientY + 'px';
            }
        }
    });

    container.addEventListener('mouseup', function(event) {
        selection.classList.remove('selection-visible');
        isResizing = false;
    });
}

function mountSelectionItems(selectionItems) {
    selectionItems.forEach(item => {
        mountSelectionItem(item); 
    });
}

function mountSelectionItem(selectionItem) {
    selectionItem.addEventListener('click', function() {
        selectionItem.classList.toggle('selection_item-selected');
    });
}