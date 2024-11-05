window.onload = function() {
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
            'Praesentium, reiciendis sunt! Iure quis qui dolorem adipisci, exercitationem nemo.'
        ],
        tag: 'p',
        nodes: []
    }

    const container = document.querySelector('.container');
    const content = container.querySelector('.content')
    const selection = document.querySelector('.selection');

    mountSelection(selection, container);
    mountSelectionItems(content, items);
    console.log(items);
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

function mountSelectionItems(root, items) {
    items.template.forEach(item => {
        const node = mountSelectionItem(item, items.tag, items.nodes); 
        root.appendChild(node);
    });
}

function mountSelectionItem(item, tag, nodes) {
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
    });

    node.addEventListener('mouseover', function() {
        node.classList.add('selection_item-hover');
        nodeInfo.hover = true;
    });

    node.addEventListener('mouseout', function() {
        node.classList.remove('selection_item-hover');
        nodeInfo.hover = false;
    });

    return node;
}