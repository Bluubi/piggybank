export function openDateFormatOption(){
    const childSelector = document.querySelector('[data-testid="date-selector"]') as HTMLDivElement;
    console.log(childSelector)
    const display = childSelector.style.display;

    if(display === 'block'){
        childSelector.style.display = 'none';
    } else {
        childSelector.style.display = 'block';
    }

}
export function selectDateFormatOption(event: Event){
    const liElement = event.target as HTMLLIElement;
    const value = liElement.getAttribute('data-value');
    console.log(dateFormatOptions.get(value!)!())
    return dateFormatOptions.get(value!);
}


export const dateFormatOptions = new Map<string, () => string>(
    [["YYYY/MM/DD", () => new Date().toLocaleDateString('es-ES', {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })],
    ["DD/MM/YYYY", () => new Date().toLocaleDateString('zh-Hans-CN', {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    })]
    ]
)
