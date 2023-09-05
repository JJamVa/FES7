class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.cola-list');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {
        try {
            const response = await fetch('./items.json');

            if (!response.ok) throw new Error('Http Error! ' + response.status)
            return await response.json();
        } catch (error) {
            console.error("콜라 데이터 로딩 에러 ", error);
        }
    }

    async colaFactory(data) {
        const docFrag = new DocumentFragment();
        [...data].forEach((e) => {
            const item = document.createElement('li');
            const itemTemplate = `<button type="button" class="btn-cola on" data-item=${e.name}
                                    data-img=${e.img} data-count=${e.count} data-price=${e.cost}>
                                <img src="./img/${e.img}" alt="" />
                                <span class="cola-name">${e.name}</span>
                                <strong class="cola-price">${e.cost}원</strong>
                                    </button>`
            item.innerHTML = itemTemplate;
            docFrag.append(item)
        })
        this.itemList.append(docFrag);
    }

}

export default ColaGenerator;
