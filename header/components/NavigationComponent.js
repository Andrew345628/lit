export class NavigationComponent {

    hostConnected() {
        const header = document.createElement('header');
        const list = document.createElement('ul');

        let elements = [
            'hi', 'hi', 'hi', 'hi'
        ];

        elements.forEach(function(item){
            const element = document.createElement('li');
            element.insertAdjacentHTML("beforeend", item);

            list.appendChild(element);
        });

        return header.appendChild(list);
    }
}