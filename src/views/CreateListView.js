import ListView from './ListView.js';

export default function createListView(name) {
    return {
        name: name,
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        render(createElement) {
            return createElement(ListView);
        }
    }
}