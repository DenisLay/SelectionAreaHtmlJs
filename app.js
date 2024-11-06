window.onload = function() {
    isResizing = false;
    selection = null;
    selectedNodes = [];
    nodes = [];
    startX = null, startY = null;

    items = {
        template: [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.',

            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repudiandae.',
            'Reprehenderit qui rem, quia similique doloribus deserunt quaerat eum perferendis.',
            'Dolorem quia ipsam commodi quae possimus rerum, officiis inventore maxime?',
            'Repellendus esse ullam quod mollitia nihil quo asperiores totam suscipit?',
            'Iste, impedit consectetur repellendus rerum a totam veniam laborum quibusdam!',
            'Consectetur dolores a sed ad, ea perferendis accusantium optio quisquam.',
            'Numquam distinctio ab porro recusandae, optio quod quo est impedit!',
            'Quisquam, adipisci odit expedita est error ipsa voluptatem ea nostrum.',
            'Nostrum nobis harum dolor rem aut nulla ipsum accusantium perspiciatis!',
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.'
        ],
        tag: 'p'
    }

    container = document.querySelector('.container');
    let content = container.querySelector('.content')
    //const selection = document.querySelector('.selection');

    mountSelection();
    mountSelectionItems(content, items);
    mountContentContainer(container);
}

function mountSelection() {
    container.addEventListener('mousedown', startSelection);
    container.addEventListener('mousemove', moveSelection);
    //container.addEventListener('mouseleave', endSelection);
    container.addEventListener('mouseup', endSelection);
}

function startSelection(event) {
    const gap = (window.innerWidth - 1000) / 2;
    startX = event.clientX - gap;
    startY = event.clientY;
    isResizing = true;    

    if (selection == null) {
        selection = document.createElement('div');
        selection.classList.add('selection-box');
        container.appendChild(selection);
    } else {
        selection.style.left = `0px`;
        selection.style.width = `0px`;
        selection.style.top = `0px`;
        selection.style.height = `0px`;
        selection.classList.toggle('selection-box-hidden');
    }

    selectedNodes = [];
}

function moveSelection(event) {
    if (!isResizing || selection == null) return;

    const gap = (window.innerWidth - 1000) / 2;
    const width = event.clientX - startX - gap;
    const height = event.clientY - startY;

    if (event.clientX - gap < startX) {
        selection.style.left = `${event.clientX - gap}px`;
        selection.style.width = `${Math.abs(width)}px`;
    } else {
        selection.style.left = `${Math.min(event.clientX, startX)}px`;
        selection.style.width = `${Math.abs(width)}px`;
    }
    selection.style.top = `${Math.min(event.clientY, startY)}px`;
    selection.style.height = `${Math.abs(height)}px`;

    /*rect = selection.getBoundingClientRect();
    console.log(rect);*/

    checkSelection();
}

function endSelection(event) {
    isResizing = false;
    
    if (selection != null) {
        selection.classList.toggle('selection-box-hidden');
    }

    console.log(selectedNodes);
}

function checkSelection() {
    const rect = selection.getBoundingClientRect();

    const containerScrollTop = container.scrollTop;

    nodes.map(nodeItem => {
        const node = nodeItem.node;
        const nodeRect = node.getBoundingClientRect();
        const nodeTop = nodeRect.top + containerScrollTop;

        //console.log(`${rect.left} >= ${node.left} && ${rect.right} <= ${node.right} && (${rect.top} >= ${node.top} || ${rect.bottom} <= ${node.bottom}) => ${rect.left >= node.left && rect.right <= node.right && (rect.top >= node.top || rect.bottom <= node.bottom)}`);
        
        if ((rect.left >= nodeRect.left ||
            rect.right <= nodeRect.right) &&
            (rect.top >= nodeRect.top ||
            rect.bottom <= nodeRect.bottom)) {
            node.classList.remove('selection_item-selected');
            selectedNodes = selectedNodes.filter(item => item !== node);
        } else {
            node.classList.add('selection_item-selected');
            if (!selectedNodes.includes(node)) {
                selectedNodes.push(node);
            }
        }
    });
}

/*function mountSelection(selection, container) {
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

            updateSelectedNodesInArea(selection);
        }
    });

    container.addEventListener('mouseup', function(event) {
        selection.classList.remove('selection-visible');
        isResizing = false;
    });

    container.addEventListener('mouseleave', function() {
        selection.classList.remove('selection-visible');
        isResizing = false;
    });
}*/

function mountSelectionItems(root, items) {
    items.template.forEach(item => {
        const node = mountSelectionItem(item, items.tag);
        root.appendChild(node);
    });
}

function mountSelectionItem(item, tag) {
    const node = document.createElement(tag);
    node.textContent = item;
    node.classList.add('selection_item');

    const nodeInfo = {
        node: node,
        selected: false,
        hover: false
    }
    nodes.push(nodeInfo);
    
    node.addEventListener('click', function() {
        node.classList.toggle('selection_item-selected');
        nodeInfo.selected = !nodeInfo.selected;

        /*rect = node.getBoundingClientRect();
        console.log(rect);*/
    });

    return node;
}

function mountContentContainer(contentContainer) {
    
}

function updateSelectedNodesInArea(selection) {
    nodes.map(node => {

    });

    /*rect = selection.getBoundingClientRect();
    console.log(rect);*/
}
