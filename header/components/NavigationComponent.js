export class NavigationComponent {

    hostConnected() {
        const header = document.createElement('header');
        const list = document.createElement('ul');

        let elements = [
            'О нас', 'Купить контакты', 'Отзывы', 'Аккаунт'
        ];

        elements.forEach(function(item){
            const element = document.createElement('span');
            element.insertAdjacentHTML("beforeend", item);

            list.appendChild(element);
        });

        return header.appendChild(list);
    }
}